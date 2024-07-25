import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PartnerMatchServiceBase } from "./base/partnerMatch.service.base";

@Injectable()
export class PartnerMatchService extends PartnerMatchServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
