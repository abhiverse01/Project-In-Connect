import { SortOrder } from "../../util/SortOrder";

export type MusicShareOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  artist?: SortOrder;
  file?: SortOrder;
  sharedBy?: SortOrder;
};
