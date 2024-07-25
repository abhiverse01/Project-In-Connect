import { JsonValue } from "type-fest";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  bio: string | null;
  interests?: Array<"Option1">;
  profilePicture: JsonValue;
};
