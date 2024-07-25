import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PartnerMatchResolverBase } from "./base/partnerMatch.resolver.base";
import { PartnerMatch } from "./base/PartnerMatch";
import { PartnerMatchService } from "./partnerMatch.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PartnerMatch)
export class PartnerMatchResolver extends PartnerMatchResolverBase {
  constructor(
    protected readonly service: PartnerMatchService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
