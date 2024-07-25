import { PartnerMatch as TPartnerMatch } from "../api/partnerMatch/PartnerMatch";

export const PARTNERMATCH_TITLE_FIELD = "user1";

export const PartnerMatchTitle = (record: TPartnerMatch): string => {
  return record.user1?.toString() || String(record.id);
};
