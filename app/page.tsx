// src/app/page.tsx
import Link from "next/link";
import { FaSchool } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="lg:min-h-[calc(100vh-74px)] min-h-[calc(100vh-66px)] bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="mb-8">
            <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaSchool className="text-white size-8" />
            </div>
            <h1 className="text-4xl xl:text-3xl font-bold text-gray-800 mb-4">
              School Record
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Easily add and manage school information. View schools in your
              area and add new ones to build a comprehensive directory.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/schools"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition duration-200 transform hover:scale-105 shadow-lg"
            >
              View All Schools
            </Link>
            <Link
              href="/add-school"
              className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-medium transition duration-200 transform hover:scale-105 shadow-lg"
            >
              Add New School
            </Link>
          </div>

          {/* <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Easy to Add</h3>
              <p className="text-sm text-gray-600">Simple form with validation to add school details quickly</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Visual Display</h3>
              <p className="text-sm text-gray-600">Browse schools in an attractive card-based layout</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Responsive</h3>
              <p className="text-sm text-gray-600">Works perfectly on both desktop and mobile devices</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
