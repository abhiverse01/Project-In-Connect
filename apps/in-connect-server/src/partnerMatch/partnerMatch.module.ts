import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PartnerMatchModuleBase } from "./base/partnerMatch.module.base";
import { PartnerMatchService } from "./partnerMatch.service";
import { PartnerMatchController } from "./partnerMatch.controller";
import { PartnerMatchResolver } from "./partnerMatch.resolver";

@Module({
  imports: [PartnerMatchModuleBase, forwardRef(() => AuthModule)],
  controllers: [PartnerMatchController],
  providers: [PartnerMatchService, PartnerMatchResolver],
  exports: [PartnerMatchService],
})
export class PartnerMatchModule {}
