import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Welcome to Our Cottage
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              A private retreat for friends and family. Enjoy a peaceful getaway 
              in a comfortable, well-equipped space perfect for relaxation and making memories.
            </p>
          </div>
          
          {/* Hero Image Placeholder */}
          <div className="bg-gray-300 rounded-lg aspect-video flex items-center justify-center mb-8">
            <p className="text-gray-500 text-sm">Hero Image Placeholder</p>
          </div>
        </div>
      </section>

      {/* Highlights / Photos Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Cottage Highlights
          </h2>
          
          {/* Photo Grid Placeholder */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center">
              <p className="text-gray-500 text-xs text-center px-2">
                Highlight Photo 1
              </p>
            </div>
            <div className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center">
              <p className="text-gray-500 text-xs text-center px-2">
                Highlight Photo 2
              </p>
            </div>
            <div className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center">
              <p className="text-gray-500 text-xs text-center px-2">
                Highlight Photo 3
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Overview */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Amenities & Location
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                What's Included
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Fully equipped kitchen</li>
                <li>• Wi-Fi internet access</li>
                <li>• Linens and towels provided</li>
                <li>• Parking available</li>
                <li>• Outdoor space</li>
                <li>• [Additional amenities to be added]</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                General Area
              </h3>
              <p className="text-gray-700 mb-4">
                Located in [General Location Area]. Close to local attractions 
                and amenities while maintaining privacy and tranquility.
              </p>
              <p className="text-sm text-gray-500 italic">
                Exact address will be provided upon confirmed booking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Book?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Submit an inquiry to check availability and learn more about your stay.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Inquire to Book
          </Link>
        </div>
      </section>
    </div>
  )
}

