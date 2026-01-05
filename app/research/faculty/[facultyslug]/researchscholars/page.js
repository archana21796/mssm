export default function ResearchScholarsPage({ params }) {
  return (
    <main className="h-screen">
      <h1>Research Scholars</h1>
      <p>Faculty: {params.facultySlug}</p>
    </main>
  );
}
