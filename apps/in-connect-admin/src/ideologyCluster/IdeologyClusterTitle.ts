import { IdeologyCluster as TIdeologyCluster } from "../api/ideologyCluster/IdeologyCluster";

export const IDEOLOGYCLUSTER_TITLE_FIELD = "name";

export const IdeologyClusterTitle = (record: TIdeologyCluster): string => {
  return record.name?.toString() || String(record.id);
};
