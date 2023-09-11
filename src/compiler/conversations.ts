import { ICurrentUser } from "./user";

export interface IUserReceiver extends Omit<ICurrentUser, "id"> {
  receiverId: string;
}
export interface IConversation {
  user: IUserReceiver;
  conversationId: string;
}
