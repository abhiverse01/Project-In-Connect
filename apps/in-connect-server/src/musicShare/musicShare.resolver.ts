import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MusicShareResolverBase } from "./base/musicShare.resolver.base";
import { MusicShare } from "./base/MusicShare";
import { MusicShareService } from "./musicShare.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MusicShare)
export class MusicShareResolver extends MusicShareResolverBase {
  constructor(
    protected readonly service: MusicShareService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
