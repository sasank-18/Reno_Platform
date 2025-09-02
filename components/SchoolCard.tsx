// src/components/SchoolCard.tsx
import { School } from "@/types/school";
import Image from "next/image";
import { HiLocationMarker } from "react-icons/hi";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

interface SchoolCardProps {
  school: School;
}

export default function SchoolCard({ school }: SchoolCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
      {/* School Image */}
      <div className="relative   h-60 w-full overflow-hidden">
        <Image
          src={school.image}
          alt={school.name}
          fill
          className=" object-cover object-top transition-transform duration-300 hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* School Details */}
      <div className="p-4">
        {/* School Name */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors duration-200">
          {school.name}
        </h3>

        {/* Location */}
        <div className="flex items-start mb-4">
          <div className="flex-shrink-0 w-5 h-5 text-red-500 mt-0.5">
            <HiLocationMarker />
          </div>
          <div className="ml-3 flex-1">
            <p className="text-sm text-gray-600 leading-5 line-clamp-2">
              {school.address}
            </p>
            <p className="text-sm font-semibold text-gray-800 mt-1">
              {school.city}, {school.state}
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-3 mb-4">
          {/* Phone */}
          <div className="flex items-center">
            <div className="flex-shrink-0 w-5 h-5 text-green-500">
              <IoCall />
            </div>
            <a
              href={`tel:+91${school.contact}`}
              className="ml-3 text-sm text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
            >
              +91 {school.contact}
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center">
            <div className="flex-shrink-0 w-5 h-5 text-blue-500">
             <MdEmail />

            </div>
            <a
              href={`mailto:${school.email_id}`}
              className="ml-3 text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200 truncate"
            >
              {school.email_id}
            </a>
          </div>
        </div>
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
}
