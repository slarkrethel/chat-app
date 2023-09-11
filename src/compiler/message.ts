import { ICurrentUser } from "./user";

export interface IMessage {
  user: ICurrentUser;
  message: string;
}
