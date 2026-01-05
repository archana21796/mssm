export default function ProjectsPage({ params }) {
  return (
    <div className="h-screen">
      <h1>Projects Page</h1>
      <p>Faculty: {params.facultySlug}</p>
    </div>
  );
}
