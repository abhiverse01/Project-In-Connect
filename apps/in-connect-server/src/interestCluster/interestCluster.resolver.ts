import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { InterestClusterResolverBase } from "./base/interestCluster.resolver.base";
import { InterestCluster } from "./base/InterestCluster";
import { InterestClusterService } from "./interestCluster.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => InterestCluster)
export class InterestClusterResolver extends InterestClusterResolverBase {
  constructor(
    protected readonly service: InterestClusterService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
