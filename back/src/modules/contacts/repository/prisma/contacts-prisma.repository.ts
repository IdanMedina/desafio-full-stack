import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { ContactsRepository } from '../contacts.repository';
import { CreateContactDto } from '../../dto/create-contact.dto';
import { Contact } from '../../entities/contact.entity';
import { plainToInstance } from 'class-transformer';
import { UpdateContactDto } from '../../dto/update-contact.dto';

@Injectable()
export class ContactsPrismaRespository implements ContactsRepository {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateContactDto, clientId: string): Promise<Contact> {
    const contact = new Contact();
    Object.assign(contact, {
      ...data,
    });
    const newContact = await this.prisma.contact.create({
      data: {
        ...contact,
        clientId: clientId,
      },
    });

    return plainToInstance(Contact, newContact);
  }
  async findAll(clientId: string): Promise<Contact[]> {
    const contacts = await this.prisma.contact.findMany({
      where: { clientId: clientId },
    });
    return contacts;
  }
  async findOne(id: string): Promise<Contact> {
    const contact = await this.prisma.contact.findUnique({
      where: { id }
    });
    return contact;
  }
  async findByEmail(email: string): Promise<Contact> {
    const contact = await this.prisma.contact.findUnique({
      where: { email },
    });
    return contact;
  }
  async update(id: string, data: UpdateContactDto): Promise<Contact> {
    const contact = this.prisma.contact.update({
      where: { id },
      data: { ...data },
    });
    return contact;
  }
  async delete(id: string): Promise<void> {
    await this.prisma.contact.delete({
      where: { id },
    });
  }
}
