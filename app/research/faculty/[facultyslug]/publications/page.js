export default function PublicationsPage({ params }) {
  return (
    <main className="h-screen">
      <h1>Publications</h1>
      <p>Faculty: {params.facultySlug}</p>
    </main>
  );
}
