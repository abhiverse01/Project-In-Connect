import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PartnerMatchService } from "./partnerMatch.service";
import { PartnerMatchControllerBase } from "./base/partnerMatch.controller.base";

@swagger.ApiTags("partnerMatches")
@common.Controller("partnerMatches")
export class PartnerMatchController extends PartnerMatchControllerBase {
  constructor(
    protected readonly service: PartnerMatchService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
