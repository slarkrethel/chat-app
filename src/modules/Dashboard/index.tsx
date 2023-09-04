import ListMessage from "../ListMessage";
import MessageDetail from "../MessageDetail";

export default function Dashboard() {
  return (
    <main className="w-screen flex">
      <ListMessage />
      <MessageDetail />
      <section className="w-[25%] border-l border-solid border-black h-screen bg-secondary"></section>
    </main>
  );
}
