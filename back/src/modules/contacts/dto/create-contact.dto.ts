import { IsString, IsNotEmpty, IsEmail, IsOptional } from 'class-validator';
export class CreateContactDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
  
  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  clientId: string
}
