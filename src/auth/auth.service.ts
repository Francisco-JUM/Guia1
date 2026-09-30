import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private prisma: PrismaService,
  ) {}

  async validateUser(user: LoginDto) {
    // 1. Buscamos al usuario por su correo
    const foundUser = await this.prisma.user.findUnique({
      where: { email: user.email },
    });

    if (!foundUser) return null;

    // 2. Comparamos la contraseña enviada con la guardada en la base de datos
const isPasswordValid = (user.password === foundUser.password);
    // 3. Si es válida, firmamos y devolvemos el Token JWT
    if (isPasswordValid) {
      return this.jwtService.sign({
        id: foundUser.id,
        email: foundUser.email,
        tenantId: foundUser.tenantId, // Usamos tenantId en lugar de role para tu estructura
      });
    } else {
      throw new UnauthorizedException('Credenciales inválidas');
    }
  }
}