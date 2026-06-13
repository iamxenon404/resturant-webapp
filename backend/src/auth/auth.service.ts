import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';

@Injectable()
export class AuthService {
  // 10 salt rounds is the standard security benchmark for hashing
  private readonly SALT_ROUNDS = 10;

  constructor(private prisma: PrismaService) {}

  async signUp(body: any) {
    try {
      const { email, password, name, phone } = body;

      // 1. Check if the user already exists in your Render DB
      const existingUser = await this.prisma.user.findUnique({
        where: { email },
      });

      if (existingUser) {
        throw new BadRequestException('User already registered');
      }

      // 2. Securely hash the password so it isn't saved as plain text
      const hashedPassword = await bcrypt.hash(password, this.SALT_ROUNDS);

      // 3. Create the user directly inside your Render PostgreSQL database
      const newUser = await this.prisma.user.create({
        data: {
          id: crypto.randomUUID(), // Generates a standard clean UUID string
          email,
          password: hashedPassword, // Make sure your Prisma schema has a password field!
          name,
          phone,
          role: 'customer',
        },
      });

      // Don't send the password hash back to the frontend
      const { password: _, ... userWithoutPassword } = newUser;
      return { success: true, user: userWithoutPassword };

    } catch (error) {
      console.error('CRITICAL SIGNUP ERROR IN NESTJS:', error);
      throw error;
    }
  }

  async login(body: any) {
    const { email, password } = body;

    // 1. Look up the user by email
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    // 2. Compare the incoming password with the hashed password in Render
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const { password: _, ...userWithoutPassword } = user;

    // 3. Authenticated successfully! 
    return {
      success: true,
      message: 'Logged in successfully',
      user: userWithoutPassword,
    };
  }
}