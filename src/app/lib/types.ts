import { z } from 'zod'

export const projectSchema = z.object({
  id: z.string().uuid(),
  url: z.string().url(),
  status: z.string(),
  country: z.string().nullable(),
})

export type Project = z.infer<typeof projectSchema>

export const projectsArraySchema = z.array(projectSchema)
