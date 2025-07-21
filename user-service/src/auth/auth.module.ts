import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Auth } from 'src/auth/entities/auth.entity';
import { AuthSchema } from 'src/auth/entities/auth.entity';
import { RefreshToken, RefreshTokenSchema } from 'src/auth/entities/refreshtoken.schema';
import { AuthController } from 'src/auth/auth.controller';
import { ResetToken, ResetTokenSchema } from 'src/auth/entities/resert-token.schema';
import { SendMailService } from 'src/services/sendmail.services';
import { MailerModule } from '@nestjs-modules/mailer';


@Module({
  imports: [MongooseModule.forFeature([{name:Auth.name, schema:AuthSchema, collection: 'users'},
   {name: RefreshToken.name, schema: RefreshTokenSchema, collection: 'refresh_tokens'},
    {name: ResetToken.name, schema: ResetTokenSchema, collection: 'reset_tokens'}
  ]), MailerModule],
  controllers: [AuthController],
  providers: [AuthService, SendMailService],
})
export class AuthModule {}
