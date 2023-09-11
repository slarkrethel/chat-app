import { useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import MessageDetail from "../MessageDetail";
import { getSessionStorage } from "@/utils/getSessionStorage";
import axios from "@/services/axios";
import { ICurrentUser } from "@/compiler/user";
import { DashboardContext } from "@/context/dashboard";
import ListMessage from "../ListMessage";
import People from "../People";

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
    [
      "conversationId",
      conversationId,
      currentUser.id,
      currentReceiver.receiverId,
    ],
    async () => {
      const res = await axios.get(
        `/message/${conversationId}?senderId=${currentUser.id}&receiverId=${currentReceiver.receiverId}`
      );

      return res.data;
    },
    {
      enabled: !!conversationId,
    }
  );

  const { data: dataPeople } = useQuery(
    ["listPeople", currentUser.id],
    async () => {
      const res = await axios.get(`/users/${currentUser.id}`);

      return res.data;
    },
    {
      enabled: !!currentUser.id,
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
        <People listUser={dataPeople} />
      </DashboardContext.Provider>
    </main>
  );
}
