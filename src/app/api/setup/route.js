import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    await dbConnect();

    const adminExists = await User.findOne({ email: 'admin@mascular.com' });
    if (adminExists) {
      return NextResponse.json({ message: 'Admin already exists' });
    }

    const admin = await User.create({
      name: 'Super Admin',
      email: 'admin@mascular.com',
      password: 'adminpassword123',
      role: 'admin',
    });

    return NextResponse.json({
      message: 'Admin account created successfully',
      email: admin.email,
      password: 'adminpassword123'
    });
  } catch (error) {
    return NextResponse.json({ message: 'Server error', error: error.message }, { status: 500 });
  }
}
