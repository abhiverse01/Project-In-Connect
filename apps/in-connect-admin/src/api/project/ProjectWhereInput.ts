import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type ProjectWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  files?: JsonFilter;
  title?: StringNullableFilter;
  owner?: StringNullableFilter;
};
