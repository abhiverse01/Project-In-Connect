import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { InterestClusterModuleBase } from "./base/interestCluster.module.base";
import { InterestClusterService } from "./interestCluster.service";
import { InterestClusterController } from "./interestCluster.controller";
import { InterestClusterResolver } from "./interestCluster.resolver";

@Module({
  imports: [InterestClusterModuleBase, forwardRef(() => AuthModule)],
  controllers: [InterestClusterController],
  providers: [InterestClusterService, InterestClusterResolver],
  exports: [InterestClusterService],
})
export class InterestClusterModule {}
