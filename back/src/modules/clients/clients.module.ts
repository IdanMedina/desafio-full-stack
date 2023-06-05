import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { ClientsRepository } from './repositories/clients.repository';
import { PrismaService } from 'src/database/prisma.service';
import { ClientsPrismaRespository } from './repositories/prisma/clients-prisma.repository';

@Module({
  controllers: [ClientsController],
  providers: [
    ClientsService,
    PrismaService,
    {
      provide: ClientsRepository,
      useClass: ClientsPrismaRespository,
    },
  ],
  exports: [ClientsService]
})
export class ClientsModule {}
