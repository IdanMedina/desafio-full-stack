import { Controller, Body , Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { ApiTags } from '@nestjs/swagger';
import { AuthDto } from './dto/auth.dto';

interface iClientLogin {
  email: string,
  password: string
}

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('')
  @UseGuards(LocalAuthGuard)
  login(@Body() client: AuthDto){
    return this.authService.login(client.email)
  }
  
}
