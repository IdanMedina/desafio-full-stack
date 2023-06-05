import { Controller, Body , Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

interface iClientLogin {
  email: string,
  password: string
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('')
  @UseGuards(LocalAuthGuard)
  login(@Body() client: iClientLogin){
    return this.authService.login(client.email)
  }
  
}
