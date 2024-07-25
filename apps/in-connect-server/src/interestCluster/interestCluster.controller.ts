import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { InterestClusterService } from "./interestCluster.service";
import { InterestClusterControllerBase } from "./base/interestCluster.controller.base";

@swagger.ApiTags("interestClusters")
@common.Controller("interestClusters")
export class InterestClusterController extends InterestClusterControllerBase {
  constructor(
    protected readonly service: InterestClusterService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
