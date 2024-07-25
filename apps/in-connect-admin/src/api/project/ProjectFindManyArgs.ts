import { ProjectWhereInput } from "./ProjectWhereInput";
import { ProjectOrderByInput } from "./ProjectOrderByInput";

export type ProjectFindManyArgs = {
  where?: ProjectWhereInput;
  orderBy?: Array<ProjectOrderByInput>;
  skip?: number;
  take?: number;
};
