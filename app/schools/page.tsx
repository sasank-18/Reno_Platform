
// src/app/schools/page.tsx
import SchoolCard from "@/components/SchoolCard";
import { School } from "@/types/school";
import Link from "next/link";

export default async function ShowSchoolsPage() {
  // call API route instead of prisma
  const res = await fetch(`${process.env.DOMAIN}/api/schools`, {
    cache: "no-store", // ensures fresh data
  });

  

  if (!res.ok) {
    throw new Error("Failed to fetch schools");
  }

  const schools = await res.json();


  console.log("schools", schools);

  return (
    <div className="lg:min-h-[calc(100vh-74px)] min-h-[calc(100vh-66px)] bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 sm:mb-0">All Schools</h1>
          {/* <Link
            href="/add-school"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition duration-200 font-medium"
          >
            Add New School
          </Link> */}
        </div>

        {/* Schools Grid */}
        {schools.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-600 mb-2">No Schools Found</h3>
            <Link
              href="/add-school"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition duration-200 font-medium"
            >
              Add First School
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {schools.map((school: School) => (
              <SchoolCard key={school.id} school={school} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
