import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { IdeologyClusterResolverBase } from "./base/ideologyCluster.resolver.base";
import { IdeologyCluster } from "./base/IdeologyCluster";
import { IdeologyClusterService } from "./ideologyCluster.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => IdeologyCluster)
export class IdeologyClusterResolver extends IdeologyClusterResolverBase {
  constructor(
    protected readonly service: IdeologyClusterService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
