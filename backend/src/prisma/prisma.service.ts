import { Injectable, OnModuleInit, OnModuleDestroy, InternalServerErrorException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    const dbUrl = process.env.DATABASE_URL;
    
    if (!dbUrl) {
      throw new InternalServerErrorException(
        'DATABASE_URL is missing from environment variables. Check your .env file.'
      );
    }

    // Let the Prisma 7 client constructor automatically absorb the connection strings
    // mapped inside your prisma.config.ts runtime context natively.
    super();
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}