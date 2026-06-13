import { Injectable, OnModuleInit, OnModuleDestroy, InternalServerErrorException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Client } from 'pg';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  private dbClient: Client;

  constructor() {
    const dbUrl = process.env.DATABASE_URL;
    
    if (!dbUrl) {
      throw new InternalServerErrorException(
        'DATABASE_URL is missing from environment variables. Check your .env file.'
      );
    }

    // 1. Create a single, stable direct connection client
    const dbClient = new Client({ 
      connectionString: dbUrl,
      ssl: { rejectUnauthorized: false } // Ensures Render's SSL requirement passes
    });

    // 2. Wrap it in the Prisma Adapter the Wasm engine is begging for
    const adapter = new PrismaPg(dbClient);

    // 3. Pass it to the parent constructor
    super({ adapter });
    this.dbClient = dbClient;
  }

  async onModuleInit() {
    // Connect the underlying database driver first
    await this.dbClient.connect();
    // Then connect Prisma
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
    await this.dbClient.end(); // Gracefully disconnect the driver loop
  }
}