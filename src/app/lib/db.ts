import Database from 'better-sqlite3'
import { join } from 'path'

const dbPath = join(process.cwd(), 'sylvera-programming-task.db')

export function getProjects() {
  const db = new Database(dbPath, { readonly: true })

  try {
    const statement = db.prepare(
      'SELECT id, url, status, country FROM projects'
    )
    const projects = statement.all()

    return projects
  } catch (error) {
    console.error('Database error:', error)
    throw new Error('Failed to fetch projects from database')
  } finally {
    db.close()
  }
}
