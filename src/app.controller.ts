import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('Home')
  getHello() {
    // return this.appService.getHello();
  }
}
