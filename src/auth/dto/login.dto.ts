import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ required: true, example: 'francisco.urbina@uni.edu.ni' })
  email: string;

  @ApiProperty({ required: true, example: 'SeguraPass_2026' })
  password: string;
}