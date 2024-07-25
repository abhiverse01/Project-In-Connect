import { JsonValue } from "type-fest";

export type Project = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  files: JsonValue;
  title: string | null;
  owner: string | null;
};
