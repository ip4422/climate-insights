'use client'

import { useEffect, useState } from 'react'
import { Project } from '@/lib/types'

const Home = () => {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch('/api/projects')

        if (!response.ok) {
          throw new Error('Failed to fetch projects')
        }

        const data = await response.json()
        setProjects(data)
        console.log(data)
      } catch (err) {
        console.error(err)
      }
    }

    fetchProjects()
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Carbon Credit Projects
        </h1>
        <p className="text-gray-600">
          Browse and explore carbon credit projects from around the world.
        </p>
      </header>
    </div>
  )
}

export default Home
