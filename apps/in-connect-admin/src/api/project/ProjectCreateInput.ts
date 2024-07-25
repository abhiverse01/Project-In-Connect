import { InputJsonValue } from "../../types";

export type ProjectCreateInput = {
  description?: string | null;
  files?: InputJsonValue;
  title?: string | null;
  owner?: string | null;
};
