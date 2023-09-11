import AccountIcon from "@/assets/account.svg";

import { useContext } from "react";
import { isEmpty } from "lodash";
import { IUserReceiver } from "@/compiler/conversations";
import { DashboardContext } from "@/context/dashboard";

interface PropPeople {
  listUser: IUserReceiver[];
}

export default function People({ listUser }: PropPeople) {
  const { setConversationId, setCurrentReceiver } =
    useContext(DashboardContext);

  return (
    <div className="w-[25%] border-l border-solid border-black h-screen bg-secondary px-8 py-16 overflow-scroll">
      <div className="text-primary text-lg">People</div>
      <div>
        {!isEmpty(listUser) ? (
          listUser.map((item) => (
            <div
              className="flex items-center py-8 border-b border-b-gray-300"
              key={item.receiverId}
            >
              <div
                className="cursor-pointer flex items-center"
                onClick={() => {
                  setConversationId("new");
                  setCurrentReceiver(item);
                }}
              >
                <div>
                  <img
                    src={AccountIcon}
                    className="w-[60px] h-[60px] rounded-full p-[2px] border border-primary"
                  />
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-semibold">{item.fullName}</h3>
                  <p className="text-sm font-light text-gray-600">
                    {item.email}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-lg font-semibold mt-24">
            No Conversations
          </div>
        )}
      </div>
    </div>
  );
}
