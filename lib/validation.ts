import { z } from "zod";


export const schoolSchema = z.object({
name: z.string().min(2, "Name is too short"),
address: z.string().min(5, "Address is too short"),
city: z.string().min(2, "City is too short"),
state: z.string().min(2, "State is too short"),
contact: z
.string()
.min(6)
.max(15)
.regex(/^\+?\d{6,15}$/i, "Enter a valid phone number"),
email_id: z.string().email("Invalid email"),
image : z.any().refine(
    (files) => files instanceof FileList && files.length > 0,
    'Please select an image'
  ).refine(
    (files) => files instanceof FileList && files[0]?.size <= 5000000,
    'Image size should be less than 5MB'
  ).refine(
    (files) => files instanceof FileList && ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'].includes(files[0]?.type),
    'Only .jpg, .jpeg, .png and .webp formats are supported'
  )
});


export type SchoolInput = z.infer<typeof schoolSchema>;