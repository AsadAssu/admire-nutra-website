import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Query from '@/models/Query';

export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();
    const query = await Query.create(body);
    return NextResponse.json(query, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Server error', error: error.message }, { status: 500 });
  }
}

export async function GET(request) {
  try {
    await dbConnect();
    const queries = await Query.find({}).sort({ createdAt: -1 });
    return NextResponse.json(queries);
  } catch (error) {
    return NextResponse.json({ message: 'Server error', error: error.message }, { status: 500 });
  }
}
