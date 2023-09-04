import AccountIcon from "@/assets/account.svg";
import CallIcon from "@/assets/call.svg";
import SendIcon from "@/assets/send.svg";
import PlusIcon from "@/assets/plus.svg";

import Input from "@/components/Input";

export default function MessageDetail() {
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
          <div className="max-w-[40%] min-w-0 bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6">
            <p>Lorem Ipsum</p>
          </div>
          <div className="max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4">
            <p className="text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.
            </p>
          </div>
        </div>
      </div>
      <div className="p-14 w-full flex items-center my-auto">
        <Input
          placeholder="type a message..."
          className="w-[100%]"
          inputClassName="p-2 px-4 border-0 shadow-md rounded-full bg-light focus:ring-0 focus:border-0 outline-none"
        />
        <div className="ml-4 p-2 cursor-pointer bg-light rounded-full shadow-md">
          <img src={SendIcon} alt="send-icon" />
        </div>
        <div className="ml-4 p-2 cursor-pointer bg-light rounded-full shadow-md">
          <img src={PlusIcon} alt="send-icon" />
        </div>
      </div>
    </section>
  );
}
