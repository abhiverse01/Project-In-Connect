import { MusicShare as TMusicShare } from "../api/musicShare/MusicShare";

export const MUSICSHARE_TITLE_FIELD = "title";

export const MusicShareTitle = (record: TMusicShare): string => {
  return record.title?.toString() || String(record.id);
};
