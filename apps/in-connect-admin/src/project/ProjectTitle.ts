import { Project as TProject } from "../api/project/Project";

export const PROJECT_TITLE_FIELD = "title";

export const ProjectTitle = (record: TProject): string => {
  return record.title?.toString() || String(record.id);
};
