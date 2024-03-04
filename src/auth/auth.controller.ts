import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { LoaclGuard } from './guards/local.guards';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @UseGuards(LoaclGuard)
  login(@Body() authPayload: AuthPayloadDto) {
    const user = this.authService.validateUser(authPayload);
    // if (!user) throw new HttpException('Invalid credentials', 401);
    return user;
  }
}
