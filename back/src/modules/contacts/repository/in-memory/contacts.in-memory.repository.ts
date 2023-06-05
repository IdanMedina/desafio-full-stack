import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { CreateContactDto } from '../../dto/create-contact.dto';
import { Contact } from '../../entities/contact.entity';
import { ContactsRepository } from '../contacts.repository';
import { UpdateContactDto } from '../../dto/update-contact.dto';

@Injectable()
export class ContactsInMemoryRepository implements ContactsRepository {
  private database: Contact[] = [];
  create(data: CreateContactDto): Contact | Promise<Contact> {
    const newContact = new Contact();
    Object.assign(newContact, {
      ...data,
    });

    this.database.push(newContact);

    return newContact;
  }
  findAll(): Contact[] | Promise<Contact[]> {
    return plainToInstance(Contact, this.database);
  }
  findOne(id: string): Contact | Promise<Contact> {
    const contact = this.database.find((contact) => contact.id == id);
    return plainToInstance(Contact, contact);
  }
  findByEmail(email: string){
    const contact = this.database.find((contact) => contact.email == email)
    return plainToInstance(Contact, contact);
  }
  update(id: string, data: UpdateContactDto): Contact | Promise<Contact> {
    const contactIndex = this.database.findIndex((contact) => contact.id == id);
    this.database[contactIndex] = {
      ...this.database[contactIndex],
      ...data,
    };
    return plainToInstance(Contact, this.database[contactIndex]);
  }
  delete(id: string): void | Promise<void> {
    const contactIndex = this.database.findIndex((contact) => contact.id == id);
    this.database.splice(contactIndex, 1);
  }
}
