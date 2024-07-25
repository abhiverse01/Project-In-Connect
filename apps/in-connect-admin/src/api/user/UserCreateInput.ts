import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  bio?: string | null;
  interests?: Array<"Option1">;
  profilePicture?: InputJsonValue;
};
