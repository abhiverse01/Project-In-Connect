import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { IdeologyClusterService } from "./ideologyCluster.service";
import { IdeologyClusterControllerBase } from "./base/ideologyCluster.controller.base";

@swagger.ApiTags("ideologyClusters")
@common.Controller("ideologyClusters")
export class IdeologyClusterController extends IdeologyClusterControllerBase {
  constructor(
    protected readonly service: IdeologyClusterService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
