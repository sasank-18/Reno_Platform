// src/app/add-school/page.tsx
import AddSchoolForm from '@/components/AddSchoolForm'
import Link from 'next/link'
import { BiSolidLeftArrowAlt } from 'react-icons/bi'

export default function AddSchoolPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Navigation */}
        <div className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
         <BiSolidLeftArrowAlt  className='size-8'/>

            
          </Link>
        </div>

        {/* Form */}
        <AddSchoolForm />
      </div>
    </div>
  )
}