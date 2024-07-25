import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PartnerMatchWhereInput = {
  id?: StringFilter;
  compatibilityScore?: FloatNullableFilter;
  user1?: StringNullableFilter;
  user2?: StringNullableFilter;
};
