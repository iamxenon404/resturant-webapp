import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  async onModuleInit() {
    // Connects natively using standard node network sockets
    await this.$connect();
    console.log('🚀 Prisma successfully connected to Render natively!');
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}