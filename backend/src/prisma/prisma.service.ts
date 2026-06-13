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

    // 1. Initialize the standard Node-pg client safely
    const dbClient = new Client({ 
      connectionString: dbUrl,
      ssl: { rejectUnauthorized: false }
    });

    // 2. Prevent unhandled socket errors from crashing Node globally
    dbClient.on('error', (err) => {
      console.error('Low-level pg driver error caught safely:', err.message);
    });

    // 3. Wrap it inside the adapter
    const adapter = new PrismaPg(dbClient);

    super({ adapter });
    this.dbClient = dbClient;
  }

  async onModuleInit() {
    try {
      // Connect the driver client securely first
      await this.dbClient.connect();
      // Connect the Prisma abstraction engine second
      await this.$connect();
      console.log('Successfully connected to Render database via Wasm engine.');
    } catch (error) {
      console.error('Database initialization failed:', error);
    }
  }

  async onModuleDestroy() {
    try {
      await this.$disconnect();
      await this.dbClient.end();
    } catch (error) {
      console.error('Error disconnecting database gracefully:', error);
    }
  }
}