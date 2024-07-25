import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InterestClusterServiceBase } from "./base/interestCluster.service.base";

@Injectable()
export class InterestClusterService extends InterestClusterServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
