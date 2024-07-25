import { JsonValue } from "type-fest";

export type MusicShare = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  artist: string | null;
  file: JsonValue;
  sharedBy: string | null;
};
