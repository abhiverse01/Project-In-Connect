import { InputJsonValue } from "../../types";

export type MusicShareUpdateInput = {
  title?: string | null;
  artist?: string | null;
  file?: InputJsonValue;
  sharedBy?: string | null;
};
