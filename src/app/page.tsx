import ProjectsTable from '@/components/ProjectsTable';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Carbon Credit Projects</h1>
        <p className="text-gray-600">
          Browse and explore carbon credit projects from around the world.
        </p>
      </header>
      
      <main>
        <ProjectsTable />
      </main>
    </div>
  );
}