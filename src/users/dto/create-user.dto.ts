import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ required: true, example: 'francisco.urbina@uni.edu.ni' })
  email: string;

  @ApiProperty({ required: true, example: 'Francisco Javier Urbina Mejía' })
  name: string;

  @ApiProperty({ required: false, example: 'FJU2026' })
  username?: string;

  @ApiProperty({ required: true, example: 'SeguraPass_2026' })
  password: string;

  @ApiProperty({ required: true, example: 2, description: 'ID del tenant (ej. Ingeniería UNI RUSB)' })
  tenantId: number;
}