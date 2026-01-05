import Link from "next/link";

const facultyList = [
  {
    name: "Dr. Saiju M John",
    slug: "dr-saiju-m-john",
    designation: "Director, Professor",
    qualification: "M.B.A; MFT; M.Phil; UGC NET; TN SET; PhD",
    image: "/images/director.webp",
  },
    {
    name: "Dr. D. Gomathy",
    slug: "dr-d-gomathy",
    designation: "Additional Director, Professor",
    qualification: "B.SC, M.B.A, PGDLA, M.PHIL, PhD, UGC-NET, TN SET | 34 National International Journal Publications,| 6 Chapters in ISBN books,| 4 books as editors",
    image: "/images/Dr.Gomathi.webp",
  },
  {
    name: "Dr. Vijayalakshmi Krishna A",
    slug: "dr-vijayalakshmi-krishna",
    designation: "Assistant Professor",
    qualification: "B.E., M.B.A., Ph.D",
    image: "/images/Vijayalakshmi mam.webp",
  },
  {
    name: "Dr. Chandrasekaran S",
    slug: "dr-chandrasekaran-s",
    designation: "Assistant Professor",
    qualification:
      "M.B.A., M.Phil., TN SET, Ph.D | 3 years Corporate | 6 years Teaching",
    image: "/images/chandrasekaran.webp",
  },
  {
    name: "Dr. Jarina S. A",
    slug: "dr-jarina-sa",
    designation: "Assistant Professor",
    qualification:
      "M.B.A., Ph.D | International Marketing & Hospitality (France)",
    image: "/images/jafrina.webp",
  },
];

export default function FacultyResearchList() {
  return (
    <section className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-10 text-center">
        Faculty Research Profiles
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {facultyList.map((faculty) => (
          <div
            key={faculty.slug}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
          >
            {/* IMAGE */}
            <img
              src={faculty.image}
              alt={faculty.name}
              className="w-auto h-50 object-cover mx-auto"
            />

            {/* CONTENT */}
            <div className="p-5">
              <h2 className="text-xl font-semibold text-orange-600">
                {faculty.name}
              </h2>

              <p className="text-sm font-medium mt-1">
                {faculty.designation}
              </p>

              <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                {faculty.qualification}
              </p>

              {/* ACTIONS */}
              <div className="flex flex-wrap gap-3 mt-5">
                <Link
                  href={`/research/faculty/${faculty.slug}/projects`}
                  className="px-4 py-2 text-sm rounded bg-green-600 text-white hover:bg-green-700"
                >
                  Projects
                </Link>

                <Link
                  href={`/research/faculty/${faculty.slug}/researchscholars`}
                  className="px-4 py-2 text-sm rounded bg-orange-500 text-white hover:bg-orange-600"
                >
                  Scholars
                </Link>

                <Link
                  href={`/research/faculty/${faculty.slug}/publications`}
                  className="px-4 py-2 text-sm rounded bg-blue-600 text-white hover:bg-blue-700"
                >
                  Publications
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
