import ContactForm from '@/components/ContactForm'

export default function Contact() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-2xl">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-4">
          Contact & Inquiry
        </h1>
        
        <p className="text-gray-700 text-center mb-8">
          Interested in booking the cottage? Please fill out the form below to check 
          availability and submit your inquiry. We'll get back to you shortly.
        </p>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-6">
          <ContactForm />
        </div>

        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-gray-700">
            <strong>Note:</strong> This is an inquiry form only — it does not automatically 
            confirm your booking. All bookings require confirmation and are subject to availability. 
            The exact address will be provided upon confirmed booking for privacy reasons.
          </p>
        </div>
      </div>
    </div>
  )
}

