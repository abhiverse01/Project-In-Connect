import { InterestCluster as TInterestCluster } from "../api/interestCluster/InterestCluster";

export const INTERESTCLUSTER_TITLE_FIELD = "name";

export const InterestClusterTitle = (record: TInterestCluster): string => {
  return record.name?.toString() || String(record.id);
};
