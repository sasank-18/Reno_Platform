// src/components/AddSchoolForm.tsx
'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { schoolSchema } from '@/lib/validation'
import { useState } from 'react'
import { SchoolFormInputs } from '@/types/school'
import { useRouter } from 'next/navigation'

export default function AddSchoolForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<SchoolFormInputs>({
    resolver: zodResolver(schoolSchema)
  })


  const onSubmit = async (data: SchoolFormInputs) => {
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const formData = new FormData()
      formData.append('name', data.name)
      formData.append('address', data.address)
      formData.append('city', data.city)
      formData.append('state', data.state)
      formData.append('contact', data.contact)
      formData.append('email_id', data.email_id)
      formData.append('image', data.image[0])
   
      console.log("formData",formData)
      const response = await fetch('/api/schools', {
        method: 'POST',
        body: formData
      })

      console.log("response",response)

      if (response.ok) {
        setSubmitMessage('School added successfully!')
        router.push('/schools');
        reset()
      } else {
        const errorData = await response.json()
        setSubmitMessage(`Error: ${errorData.error}`)
      }
    } catch (error) {
      setSubmitMessage('An error occurred while adding the school')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="lg:text-3xl text-xl font-bold text-gray-800 mb-8 text-center">Add New School</h1>
      
      {submitMessage && (
        <div className={`mb-6 p-4 rounded-md ${
          submitMessage.includes('successfully') 
            ? 'bg-green-100 text-green-700 border border-green-200' 
            : 'bg-red-100 text-red-700 border border-red-200'
        }`}>
          {submitMessage}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* School Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            School Name *
          </label>
          <input
            type="text"
            id="name"
            {...register('name')}
            className="w-full px-4 py-3 border outline-none border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 text-gray-700 focus:border-transparent transition duration-200"
            placeholder="Enter school name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        {/* Address */}
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
            Address *
          </label>
          <textarea
            id="address"
            rows={3}
            {...register('address')}
            className="w-full px-4 py-3 border outline-none border-gray-300 text-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            placeholder="Enter complete address"
          />
          {errors.address && (
            <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>
          )}
        </div>

        {/* City and State */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
              City *
            </label>
            <input
              type="text"
              id="city"
              {...register('city')}
              className="w-full px-4 py-3 outline-none text-gray-700 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              placeholder="Enter city"
            />
            {errors.city && (
              <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
              State *
            </label>
            <input
              type="text"
              id="state"
              {...register('state')}
              className="w-full px-4 py-3 border outline-none text-gray-700 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              placeholder="Enter state"
            />
            {errors.state && (
              <p className="mt-1 text-sm text-red-600">{errors.state.message}</p>
            )}
          </div>
        </div>

        {/* Contact and Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-2">
              Contact Number *
            </label>
            <input
              type="tel"
              id="contact"
              {...register('contact')}
              className="w-full px-4 py-3 border outline-none text-gray-700 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              placeholder="10-digit contact number"
            />
            {errors.contact && (
              <p className="mt-1 text-sm text-red-600">{errors.contact.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email_id" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email_id"
              {...register('email_id')}
              className="w-full px-4 py-3 border outline-none text-gray-700 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              placeholder="Enter email address"
            />
            {errors.email_id && (
              <p className="mt-1 text-sm text-red-600">{errors.email_id.message}</p>
            )}
          </div>
        </div>

        {/* Image Upload */}
        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2">
            School Image *
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            {...register('image')}
            className="w-full px-4 py-3 border outline-none text-gray-700 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
          {errors.image && (
            <p className="mt-1 text-sm text-red-600">{errors.image.message as string}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-3 px-6 rounded-md transition duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {isSubmitting ? 'Adding School...' : 'Add School'}
        </button>
      </form>
    </div>
  )
}