/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { IdeologyCluster } from "./IdeologyCluster";
import { IdeologyClusterCountArgs } from "./IdeologyClusterCountArgs";
import { IdeologyClusterFindManyArgs } from "./IdeologyClusterFindManyArgs";
import { IdeologyClusterFindUniqueArgs } from "./IdeologyClusterFindUniqueArgs";
import { CreateIdeologyClusterArgs } from "./CreateIdeologyClusterArgs";
import { UpdateIdeologyClusterArgs } from "./UpdateIdeologyClusterArgs";
import { DeleteIdeologyClusterArgs } from "./DeleteIdeologyClusterArgs";
import { IdeologyClusterService } from "../ideologyCluster.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => IdeologyCluster)
export class IdeologyClusterResolverBase {
  constructor(
    protected readonly service: IdeologyClusterService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "IdeologyCluster",
    action: "read",
    possession: "any",
  })
  async _ideologyClustersMeta(
    @graphql.Args() args: IdeologyClusterCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [IdeologyCluster])
  @nestAccessControl.UseRoles({
    resource: "IdeologyCluster",
    action: "read",
    possession: "any",
  })
  async ideologyClusters(
    @graphql.Args() args: IdeologyClusterFindManyArgs
  ): Promise<IdeologyCluster[]> {
    return this.service.ideologyClusters(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => IdeologyCluster, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "IdeologyCluster",
    action: "read",
    possession: "own",
  })
  async ideologyCluster(
    @graphql.Args() args: IdeologyClusterFindUniqueArgs
  ): Promise<IdeologyCluster | null> {
    const result = await this.service.ideologyCluster(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => IdeologyCluster)
  @nestAccessControl.UseRoles({
    resource: "IdeologyCluster",
    action: "create",
    possession: "any",
  })
  async createIdeologyCluster(
    @graphql.Args() args: CreateIdeologyClusterArgs
  ): Promise<IdeologyCluster> {
    return await this.service.createIdeologyCluster({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => IdeologyCluster)
  @nestAccessControl.UseRoles({
    resource: "IdeologyCluster",
    action: "update",
    possession: "any",
  })
  async updateIdeologyCluster(
    @graphql.Args() args: UpdateIdeologyClusterArgs
  ): Promise<IdeologyCluster | null> {
    try {
      return await this.service.updateIdeologyCluster({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => IdeologyCluster)
  @nestAccessControl.UseRoles({
    resource: "IdeologyCluster",
    action: "delete",
    possession: "any",
  })
  async deleteIdeologyCluster(
    @graphql.Args() args: DeleteIdeologyClusterArgs
  ): Promise<IdeologyCluster | null> {
    try {
      return await this.service.deleteIdeologyCluster(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}