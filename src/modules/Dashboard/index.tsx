import ListMessage from "../ListMessage";

export default function Dashboard() {
  return (
    <main className="w-screen flex">
      <ListMessage />
      <section className="w-[50%] border-r border-solid border-black h-screen bg-secondary"></section>
      <section className="w-[25%] border-solid border-black h-screen bg-secondary"></section>
    </main>
  );
}
