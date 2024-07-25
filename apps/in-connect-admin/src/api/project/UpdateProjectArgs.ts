import { ProjectWhereUniqueInput } from "./ProjectWhereUniqueInput";
import { ProjectUpdateInput } from "./ProjectUpdateInput";

export type UpdateProjectArgs = {
  where: ProjectWhereUniqueInput;
  data: ProjectUpdateInput;
};
