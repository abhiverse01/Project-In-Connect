import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IdeologyClusterServiceBase } from "./base/ideologyCluster.service.base";

@Injectable()
export class IdeologyClusterService extends IdeologyClusterServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
