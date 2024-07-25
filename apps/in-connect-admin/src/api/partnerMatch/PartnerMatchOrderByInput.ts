import { SortOrder } from "../../util/SortOrder";

export type PartnerMatchOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  compatibilityScore?: SortOrder;
  user1?: SortOrder;
  user2?: SortOrder;
};
