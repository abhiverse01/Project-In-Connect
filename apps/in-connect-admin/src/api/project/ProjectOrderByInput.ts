import { SortOrder } from "../../util/SortOrder";

export type ProjectOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  description?: SortOrder;
  files?: SortOrder;
  title?: SortOrder;
  owner?: SortOrder;
};
