import { NextResponse } from 'next/server'
import { getProjects } from '@/lib/db'
import { projectsArraySchema } from '@/lib/types'

export async function GET() {
  try {
    const projects = getProjects()

    console.log(projects);
    
    const validatedProjects = projectsArraySchema.parse(projects)

    return NextResponse.json(validatedProjects)
  } catch (error) {
    console.error('Error fetching projects:', error)
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    )
  }
}
