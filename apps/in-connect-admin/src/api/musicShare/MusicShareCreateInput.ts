import { InputJsonValue } from "../../types";

export type MusicShareCreateInput = {
  title?: string | null;
  artist?: string | null;
  file?: InputJsonValue;
  sharedBy?: string | null;
};
