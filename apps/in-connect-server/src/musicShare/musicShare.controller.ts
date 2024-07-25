import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MusicShareService } from "./musicShare.service";
import { MusicShareControllerBase } from "./base/musicShare.controller.base";

@swagger.ApiTags("musicShares")
@common.Controller("musicShares")
export class MusicShareController extends MusicShareControllerBase {
  constructor(
    protected readonly service: MusicShareService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
