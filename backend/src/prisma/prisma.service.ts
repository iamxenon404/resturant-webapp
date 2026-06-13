import { Injectable, OnModuleInit, OnModuleDestroy, InternalServerErrorException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaNeon } from '@prisma/adapter-neon';
import { Pool } from '@neondatabase/serverless';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    const dbUrl = process.env.DATABASE_URL;
    
    if (!dbUrl) {
      throw new InternalServerErrorException(
        'DATABASE_URL is missing from environment variables. Check your .env file.'
      );
    }

    // 1. Establish the explicit Serverless Pool with connection string
    const neonPool = new Pool({ connectionString: dbUrl });

    // 2. Wrap it directly into the Neon Prisma driver adapter mapping
    const adapter = new PrismaNeon(neonPool as any);

    super({ adapter });
  }

  async onModuleInit() {
    await this.$connect();
    console.log('Successfully connected to Render PostgreSQL via secure Neon Serverless Pool.');
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}