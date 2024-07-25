import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PasswordService } from "../auth/password.service";
import { LocalStorageService } from "src/storage/providers/local/local.storage.service";
import { UserServiceBase } from "./base/user.service.base";

@Injectable()
export class UserService extends UserServiceBase {
  constructor(
    protected readonly prisma: PrismaService,
    protected readonly passwordService: PasswordService,
    protected readonly localStorageService: LocalStorageService
  ) {
    super(prisma, passwordService, localStorageService);
  }
}
