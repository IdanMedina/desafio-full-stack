import {
  Injectable,
  HttpCode,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ContactsRepository } from './repository/contacts.repository';

@Injectable()
export class ContactsService {
  constructor(private contactsRepository: ContactsRepository) {}
  async create(createContactDto: CreateContactDto, clientId:string) {
    const findContactEmail = await this.contactsRepository.findByEmail(
      createContactDto.email,
    );
    if (findContactEmail) {
      throw new ConflictException('Contact already exists.');
    }
    const contact = await this.contactsRepository.create(createContactDto, clientId);
    return contact;
  }

  async findAll(clientId: string) {
    const contactsRepository = await this.contactsRepository.findAll(clientId);
    return contactsRepository;
  }

  async findOne(id: string) {
    const contact = await this.contactsRepository.findOne(id);
    if (!contact) {
      throw new NotFoundException('Contact not found.');
    }
    return contact;
  }

  async update(id: string, updateContactDto: UpdateContactDto) {
    const contact = await this.contactsRepository.update(id, updateContactDto);
    return contact;
  }

  @HttpCode(204)
  async remove(id: string) {
    await this.contactsRepository.delete(id);
  }
}
