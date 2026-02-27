'use server'

export async function submitContactForm(formData: FormData) {
  // Placeholder — integrate with email service later
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    company: formData.get('company'),
    projectType: formData.get('projectType'),
    message: formData.get('message'),
  }
  console.log('Contact form submission:', data)
  return { success: true }
}
