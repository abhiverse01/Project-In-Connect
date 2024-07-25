import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProjectService } from "./project.service";
import { ProjectControllerBase } from "./base/project.controller.base";

@swagger.ApiTags("projects")
@common.Controller("projects")
export class ProjectController extends ProjectControllerBase {
  constructor(
    protected readonly service: ProjectService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
