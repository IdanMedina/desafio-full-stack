import { Module } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';
import { ContactsRepository } from './repository/contacts.repository';
import { PrismaService } from 'src/database/prisma.service';
import { ContactsPrismaRespository } from './repository/prisma/contacts-prisma.repository';

@Module({
  controllers: [ContactsController],
  providers: [
    ContactsService,
    PrismaService,
    {
      provide: ContactsRepository,
      useClass: ContactsPrismaRespository,
    },
  ],
})
export class ContactsModule {}
