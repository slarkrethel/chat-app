/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef, useContext, useState } from "react";

import AccountIcon from "@/assets/account.svg";
import CallIcon from "@/assets/call.svg";
import SendIcon from "@/assets/send.svg";
import PlusIcon from "@/assets/plus.svg";

import { isEmpty } from "lodash";

import Input from "@/components/Input";
import { IMessage } from "@/compiler/message";
import { getSessionStorage } from "@/utils/getSessionStorage";
import { ICurrentUser } from "@/compiler/user";
import { DashboardContext } from "@/context/dashboard";
import { IUserReceiver } from "@/compiler/conversations";

import { useMutation } from "@tanstack/react-query";
import axios from "@/services/axios";

interface PropMessageDetail {
  dataMessage: IMessage[];
}

const MessageDetail = forwardRef(
  ({ dataMessage }: PropMessageDetail, ref: any) => {
    const [message, setMessage] = useState("");

    const currentUser = getSessionStorage("user:detail", "") as ICurrentUser;
    const {
      currentReceiver,
      conversationId,
    }: { currentReceiver: IUserReceiver; conversationId: string } =
      useContext(DashboardContext);

    const { mutate: mutateSendMessage } = useMutation({
      mutationFn: async (newMessage?: string) =>
        await axios.post("/message", {
          conversationId: conversationId,
          senderId: currentUser.id,
          message: newMessage?.trim(),
        }),
    });

    return (
      <section className="w-[50%] h-screen bg-white flex flex-col items-center">
        <div className="w-[90%] bg-secondary h-[80px] mt-14 rounded-full flex items-center px-14 shadow-md">
          <div className="cursor-pointer">
            <img src={AccountIcon} alt="avatar-icon" width={60} height={60} />
          </div>
          <div className="ml-6 mr-auto">
            <h3 className="text-lg">Alex</h3>
            <p className="text-sm font-light text-gray-600">online</p>
          </div>
          <div className="cursor-pointer">
            <img src={CallIcon} alt="call-icon" />
          </div>
        </div>
        <div className="h-[75%] w-full overflow-scroll shadow-md">
          <div className="p-14">
            {!isEmpty(dataMessage) ? (
              dataMessage.map(({ message, user: { id } = {} }) => {
                return (
                  <div key={`${message} - ${id}`}>
                    <div
                      className={`max-w-[40%] rounded-b-xl p-4 mb-6 ${
                        id === currentUser.id
                          ? "bg-primary text-white rounded-tl-xl ml-auto"
                          : "bg-secondary rounded-tr-xl"
                      } `}
                    >
                      {message}
                    </div>
                    <div ref={ref}></div>
                  </div>
                );
              })
            ) : (
              <div className="text-center text-lg font-semibold mt-24">
                No Messages or No Conversation Selected
              </div>
            )}
          </div>
        </div>
        {currentReceiver.fullName && (
          <div className="p-14 w-full flex items-center my-auto">
            <Input
              value={message}
              placeholder="type a message..."
              className="w-[100%]"
              inputClassName="p-2 px-4 border-0 shadow-md rounded-full bg-light focus:ring-0 focus:border-0 outline-none"
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  mutateSendMessage(message);
                }
              }}
            />
            <div className="ml-4 p-2 cursor-pointer bg-light rounded-full shadow-md">
              <img src={SendIcon} alt="send-icon" />
            </div>
            <div className="ml-4 p-2 cursor-pointer bg-light rounded-full shadow-md">
              <img src={PlusIcon} alt="send-icon" />
            </div>
          </div>
        )}
      </section>
    );
  }
);

export default MessageDetail;
