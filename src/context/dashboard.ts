/* eslint-disable @typescript-eslint/no-explicit-any */
import { IUserReceiver } from "@/compiler/conversations";
import { createContext } from "react";

interface DashboardContext {
  setConversationId: any;
  setCurrentReceiver: any;
  currentReceiver: IUserReceiver;
  conversationId: string;
}

const initialDashboardContext: DashboardContext = {
  setConversationId: () => {},
  setCurrentReceiver: () => {},
  currentReceiver: {
    receiverId: "",
    email: "",
    fullName: "",
  },
  conversationId: "",
};

export const DashboardContext = createContext<DashboardContext>(
  initialDashboardContext
);
