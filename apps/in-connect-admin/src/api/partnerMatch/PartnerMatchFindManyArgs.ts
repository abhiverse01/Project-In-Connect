import { PartnerMatchWhereInput } from "./PartnerMatchWhereInput";
import { PartnerMatchOrderByInput } from "./PartnerMatchOrderByInput";

export type PartnerMatchFindManyArgs = {
  where?: PartnerMatchWhereInput;
  orderBy?: Array<PartnerMatchOrderByInput>;
  skip?: number;
  take?: number;
};
