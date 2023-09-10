import { ICurrentUser } from "./user";

export interface IConversation {
  user: ICurrentUser;
  conversationId: string;
}
