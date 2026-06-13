import { Injectable, OnModuleInit, OnModuleDestroy, InternalServerErrorException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    const dbUrl = process.env.DATABASE_URL;

    if (!dbUrl) {
      throw new InternalServerErrorException('DATABASE_URL is missing from environment variables.');
    }

    // 1. Set up a standard node-postgres Pool connection
    const pool = new Pool({ connectionString: dbUrl });
    
    // 2. Wrap it inside Prisma's official PostgreSQL adapter
    const adapter = new PrismaPg(pool);

    // 3. Pass the adapter straight to the Prisma 7 constructor
    super({ adapter });
  }

  async onModuleInit() {
    await this.$connect();
    console.log('🚀 Prisma 7 successfully connected to Render via the PG Driver Adapter!');
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}