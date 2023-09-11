import { useContext } from "react";
import { isEmpty } from "lodash";

import { ICurrentUser } from "@/compiler/user";
import { IConversation } from "@/compiler/conversations";
import { DashboardContext } from "@/context/dashboard";
import AccountIcon from "@/assets/account.svg";
interface ListMessageProp {
  currentUser: ICurrentUser;
  dataConversation: IConversation[];
}

export default function ListMessage({
  currentUser,
  dataConversation,
}: ListMessageProp) {
  const { setConversationId, setCurrentReceiver } =
    useContext(DashboardContext);

  return (
    <section className="w-[25%] border-r border-solid border-black h-screen bg-secondary">
      <div className="flex items-center my-8 mx-14">
        <div className="border border-solid border-primary p-[1px] rounded-full">
          <img src={AccountIcon} alt="account-icon" width={75} height={75} />
        </div>
        <section className="ml-4">
          <h3 className="text-2xl">{currentUser.fullName}</h3>
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
          {isEmpty(dataConversation) ? (
            <div className="text-center text-lg font-semibold mt-5">
              <p>No Conversations</p>
            </div>
          ) : (
            dataConversation.map(
              ({ conversationId, user }: IConversation, index: number) => {
                const lastItem = index === dataConversation.length - 1;

                return (
                  <div
                    key={conversationId}
                    className={`flex items-center py-8 cursor-pointer px-14 ${
                      !lastItem ? "border-b border-solid border-b-gray-300" : ""
                    }`}
                  >
                    <div
                      className="flex items-center"
                      onClick={() => {
                        setConversationId(conversationId);
                        setCurrentReceiver(user);
                      }}
                    >
                      <div>
                        <img
                          src={AccountIcon}
                          alt={`img-${conversationId}`}
                          width={60}
                          height={60}
                        />
                      </div>
                      <div className="ml-6">
                        <h3 className="text-lg font-semibold">
                          {user.fullName}
                        </h3>
                        <p className="text-sm font-light text-gray-600">
                          {user.email}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              }
            )
          )}
        </div>
      </div>
    </section>
  );
}
