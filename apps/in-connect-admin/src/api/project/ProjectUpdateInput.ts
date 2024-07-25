import { InputJsonValue } from "../../types";

export type ProjectUpdateInput = {
  description?: string | null;
  files?: InputJsonValue;
  title?: string | null;
  owner?: string | null;
};
