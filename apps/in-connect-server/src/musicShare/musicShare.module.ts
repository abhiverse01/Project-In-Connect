import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MusicShareModuleBase } from "./base/musicShare.module.base";
import { MusicShareService } from "./musicShare.service";
import { MusicShareController } from "./musicShare.controller";
import { MusicShareResolver } from "./musicShare.resolver";

@Module({
  imports: [MusicShareModuleBase, forwardRef(() => AuthModule)],
  controllers: [MusicShareController],
  providers: [MusicShareService, MusicShareResolver],
  exports: [MusicShareService],
})
export class MusicShareModule {}
