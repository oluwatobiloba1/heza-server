import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { jwtConstants } from './auth.constants';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [UserModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
    useFactory: async (configService: ConfigService) => ({
      secret: configService.get<string>('SECRET'),
      signOptions:{expiresIn: '1d'},
    }),
    inject: [ConfigService],
    }),

  ],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
