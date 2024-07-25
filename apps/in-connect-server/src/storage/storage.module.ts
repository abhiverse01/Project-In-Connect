import { Module } from "@nestjs/common";
import { LocalStorageService } from "./providers/local/local.storage.service";

@Module({
  providers: [LocalStorageService],
  exports: [LocalStorageService],
})
export class StorageModule {}
