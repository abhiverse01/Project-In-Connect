import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type MusicShareWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  artist?: StringNullableFilter;
  file?: JsonFilter;
  sharedBy?: StringNullableFilter;
};
