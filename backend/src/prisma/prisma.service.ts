import { Injectable, OnModuleInit, OnModuleDestroy, InternalServerErrorException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    const dbUrl = process.env.DATABASE_URL;

    if (!dbUrl) {
      throw new InternalServerErrorException('DATABASE_URL is missing from environment variables.');
    }

    // Pass the connection configuration directly to the constructor for Prisma 7
    super({
      datasourceUrl: dbUrl,
    });
  }

  async onModuleInit() {
    await this.$connect();
    console.log('🚀 Prisma 7 successfully connected to Render natively!');
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}