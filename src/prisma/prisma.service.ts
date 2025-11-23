import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {

    async onModuleInit() {
        try {
            await this.$connect();
            console.log('Database connected successfully.');
        } catch (error: any) {
            console.error('Database connection error:', error);
        }
    }

    async onModuleDestroy() {
        try {
            await this.$disconnect();
            console.log('Database disconnected successfully.');
        } catch (error: any) {
            console.error('Database disconnect error:', error);
        }
    }
}
