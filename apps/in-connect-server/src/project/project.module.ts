import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ProjectModuleBase } from "./base/project.module.base";
import { ProjectService } from "./project.service";
import { ProjectController } from "./project.controller";
import { ProjectResolver } from "./project.resolver";

@Module({
  imports: [ProjectModuleBase, forwardRef(() => AuthModule)],
  controllers: [ProjectController],
  providers: [ProjectService, ProjectResolver],
  exports: [ProjectService],
})
export class ProjectModule {}
