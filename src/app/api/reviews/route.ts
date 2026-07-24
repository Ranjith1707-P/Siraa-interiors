import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const getFilePath = () => path.join(process.cwd(), 'src', 'data', 'reviews.json');

export async function GET() {
  try {
    const filePath = getFilePath();
    if (!fs.existsSync(filePath)) {
      return NextResponse.json([]);
    }
    const fileData = await fs.promises.readFile(filePath, 'utf8');
    return NextResponse.json(JSON.parse(fileData));
  } catch (error) {
    console.error('Error reading reviews:', error);
    return NextResponse.json({ error: 'Failed to read reviews' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, rating, workType, text, location } = body;

    if (!name || !rating || !workType || !text || !location) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const filePath = getFilePath();
    let reviews = [];
    
    if (fs.existsSync(filePath)) {
      const fileData = await fs.promises.readFile(filePath, 'utf8');
      reviews = JSON.parse(fileData);
    }

    const newReview = {
      id: reviews.length > 0 ? Math.max(...reviews.map((r: any) => r.id)) + 1 : 1,
      name,
      rating: Number(rating),
      workType,
      text,
      location,
      date: new Date().toISOString().split('T')[0]
    };

    reviews.push(newReview);
    await fs.promises.writeFile(filePath, JSON.stringify(reviews, null, 2), 'utf8');

    return NextResponse.json(newReview, { status: 201 });
  } catch (error) {
    console.error('Error saving review:', error);
    return NextResponse.json({ error: 'Failed to save review' }, { status: 500 });
  }
}
