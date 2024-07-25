import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { IdeologyClusterModuleBase } from "./base/ideologyCluster.module.base";
import { IdeologyClusterService } from "./ideologyCluster.service";
import { IdeologyClusterController } from "./ideologyCluster.controller";
import { IdeologyClusterResolver } from "./ideologyCluster.resolver";

@Module({
  imports: [IdeologyClusterModuleBase, forwardRef(() => AuthModule)],
  controllers: [IdeologyClusterController],
  providers: [IdeologyClusterService, IdeologyClusterResolver],
  exports: [IdeologyClusterService],
})
export class IdeologyClusterModule {}
