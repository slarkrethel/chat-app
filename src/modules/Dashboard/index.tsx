import { useQuery } from "@tanstack/react-query";

import ListMessage from "../ListMessage";
import MessageDetail from "../MessageDetail";
import { getSessionStorage } from "@/utils/getSessionStorage";
import axios from "@/services/axios";
import { ICurrentUser } from "@/compiler/user";

export default function Dashboard() {
  const currentUser = getSessionStorage("user:detail", "") as ICurrentUser;
  const { data: dataConversation } = useQuery(
    ["conversation", currentUser.id],
    async () => {
      const res = await axios.get(`/conversations/${currentUser.id}`);

      return res.data;
    }
  );

  return (
    <main className="w-screen flex">
      <ListMessage
        currentUser={currentUser}
        dataConversation={dataConversation ?? []}
      />
      <MessageDetail />
      <section className="w-[25%] border-l border-solid border-black h-screen bg-secondary"></section>
    </main>
  );
}
