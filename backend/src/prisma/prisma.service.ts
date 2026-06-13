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

    // Pass the standard configuration natively to PrismaClient
    super({
      log: ['error', 'warn'],
    });
  }

  async onModuleInit() {
    // This connects directly and securely using Prisma's native engine
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}