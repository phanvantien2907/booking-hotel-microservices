import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
import { JwtModule } from '@nestjs/jwt';
import { MailerModule } from '@nestjs-modules/mailer';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';
dotenv.config();

@Module({
  imports: [AuthModule, MongooseModule.forRoot(process.env.DATABASE_URL!),
    JwtModule.register({ secret: process.env.JWT_SECRET!,
    signOptions: { expiresIn: '1h' },
    global: true,}),
    MailerModule.forRoot({
      transport: {
        host: process.env.HOST_EMAIL!,
        port: parseInt(process.env.PORT_EMAIL!, 10),
        auth: {
          user: process.env.USER_EMAIL!,
          pass: process.env.PASSWORD_APP_EMAIL!,
        }
      },
      defaults: {
        from: '"nest-modules" <modules@nestjs.com>',
      },
      template: {
        dir: __dirname + '/templates',
        adapter: new PugAdapter(),
        options: {
          strict: true,
        },
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
