import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEmail, IsOptional } from 'class-validator';
export class CreateContactDto {
  @ApiProperty({
    description: 'Nome do contato',
    type: String,
    default: 'Mario Souza',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Email do contato',
    type: String,
    default: 'mario@mail.com',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;
  
  @ApiProperty({
    description: 'Telefone do contato',
    type: String,
    default: '987654321',
  })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({
    description: 'Id do cliente usuário',
    type: String,
    default: 'b927acb5-l40e-48m4-aa65-84d85471af39',
  })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  clientId: string
}
