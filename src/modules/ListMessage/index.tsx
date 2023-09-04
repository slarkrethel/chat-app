import AccountIcon from "@/assets/account.svg";

interface DataType {
  key: React.Key;
  name: string;
  status: string;
  img: string;
}

const contact: DataType[] = [];
for (let i = 0; i < 5; i++) {
  contact.push({
    key: i,
    name: `Edward King ${i}`,
    status: "Available",
    img: AccountIcon,
  });
}

export default function ListMessage() {
  return (
    <section className="w-[25%] border-r border-solid border-black h-screen bg-secondary">
      <div className="flex items-center my-8 mx-14">
        <div className="border border-solid border-primary p-[1px] rounded-full">
          <img src={AccountIcon} alt="account-icon" width={75} height={75} />
        </div>
        <section className="ml-4">
          <h3 className="text-2xl">Tutorial Dev</h3>
          <p className="text-lg font-light">My Account</p>
        </section>
      </div>
      <hr />
      <div className="mt-6">
        <h3 className="text-primary text-lg m-6">Messages</h3>
        <div
          className="overflow-auto overflow-x-hidden shadow-inner"
          style={{
            height: "calc(100vh - 250px)",
          }}
        >
          {contact.map(
            ({ key, name, status, img }: DataType, index: number) => {
              const lastItem = index === contact.length - 1;

              return (
                <div
                  key={key}
                  className={`flex items-center py-8 cursor-pointer px-14 ${
                    !lastItem ? "border-b border-solid border-b-gray-300" : ""
                  }`}
                >
                  <div className="flex items-center">
                    <div>
                      <img src={img} alt={img} width={60} height={60} />
                    </div>
                    <div className="ml-6">
                      <h3 className="text-lg font-semibold">{name}</h3>
                      <p className="text-sm font-light text-gray-600">
                        {status}
                      </p>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}
