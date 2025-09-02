// src/app/api/schools/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import path from 'path'
import { schoolSchema } from '@/lib/validation'
import { prisma } from '@/lib/prisma'

// GET - Fetch all schools
export async function GET() {
  try {
    const schools = await prisma.schools.findMany({
      orderBy: { id: 'desc' }
    })
    return NextResponse.json(schools)
  } catch (error) {
    console.error('Error fetching schools:', error)
    return NextResponse.json(
      { error: 'Failed to fetch schools' },
      { status: 500 }
    )
  }
}

// POST - Add new school
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    
    // Extract form data
    const schoolData = {
      name: formData.get('name') as string,
      address: formData.get('address') as string,
      city: formData.get('city') as string,
      state: formData.get('state') as string,
      contact: formData.get('contact') as string,
      email_id: formData.get('email_id') as string,
      image: formData.get('image') as File
    }

    // Validate data (excluding image validation for API)
    const validationData = {
      ...schoolData,
      image: { length: 1 } // Mock for validation
    }

    // Validate required fields
    if (!schoolData.name || !schoolData.address || !schoolData.city || 
        !schoolData.state || !schoolData.contact || !schoolData.email_id || !schoolData.image) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Handle image upload
    const image = schoolData.image
    if (!image || image.size === 0) {
      return NextResponse.json(
        { error: 'No image uploaded' },
        { status: 400 }
      )
    }

    // Create schoolImages directory if it doesn't exist
    const uploadDir = path.join(process.cwd(), 'public', 'schoolImages')
    try {
      await mkdir(uploadDir, { recursive: true })
    } catch (error) {
      // Directory might already exist
    }

    // Generate unique filename
    const fileExtension = image.name.split('.').pop()
    const fileName = `school_${Date.now()}.${fileExtension}`
    const filePath = path.join(uploadDir, fileName)

    // Save image
    const bytes = await image.arrayBuffer()
    const buffer = Buffer.from(bytes)
    await writeFile(filePath, buffer)


    console.log("scoleData",schoolData)
    console.log("fileName",fileName)
    // Save school data to database
    const school = await prisma.schools.create({
      data: {
        name: schoolData.name,
        address: schoolData.address,
        city: schoolData.city,
        state: schoolData.state,
        contact: schoolData.contact,
        email_id: schoolData.email_id,
        image: `/schoolImages/${fileName}`
      }
    })

    return NextResponse.json(
      { message: 'School added successfully', school },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error adding school:', error)
    return NextResponse.json(
      { error: 'Failed to add school' },
      { status: 500 }
    )
  }
}