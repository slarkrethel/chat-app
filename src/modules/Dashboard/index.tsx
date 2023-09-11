import { useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import MessageDetail from "../MessageDetail";
import { getSessionStorage } from "@/utils/getSessionStorage";
import axios from "@/services/axios";
import { ICurrentUser } from "@/compiler/user";
import { DashboardContext } from "@/context/dashboard";
import ListMessage from "../ListMessage";

export default function Dashboard() {
  const currentUser = getSessionStorage("user:detail", "") as ICurrentUser;
  const messageRef = useRef(null);
  const [conversationId, setConversationId] = useState("");
  const [currentReceiver, setCurrentReceiver] = useState({
    receiverId: "",
    email: "",
    fullName: "",
  });

  const { data: dataConversation } = useQuery(
    ["conversation", currentUser.id],
    async () => {
      const res = await axios.get(`/conversations/${currentUser.id}`);

      return res.data;
    },
    {
      enabled: !!currentUser.id,
    }
  );

  const { data: dataMessage } = useQuery(
    ["conversationId", conversationId],
    async () => {
      const res = await axios.get(`/message/${conversationId}`);

      return res.data;
    },
    {
      enabled: !!conversationId,
    }
  );

  return (
    <main className="w-screen flex">
      <DashboardContext.Provider
        value={{
          setConversationId,
          setCurrentReceiver,
          currentReceiver,
          conversationId,
        }}
      >
        <ListMessage
          currentUser={currentUser}
          dataConversation={dataConversation ?? []}
        />
        <MessageDetail dataMessage={dataMessage} ref={messageRef} />
        <section className="w-[25%] border-l border-solid border-black h-screen bg-secondary"></section>
      </DashboardContext.Provider>
    </main>
  );
}
