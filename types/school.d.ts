export interface School {
  id: number
  name: string
  address: string
  city: string
  state: string
  contact: string
  image: string
  email_id: string
}

export interface SchoolFormInputs {
  name: string
  address: string
  city: string
  state: string
  contact: string
  email_id: string
  image: FileList
}