export default function FAQ() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-4">
          FAQ & House Rules
        </h1>
        
        <p className="text-gray-700 text-center mb-12 max-w-2xl mx-auto">
          Frequently asked questions and important house rules for your stay.
        </p>

        {/* General Questions Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            General Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What are the check-in and check-out times?
              </h3>
              <p className="text-gray-700">
                [Check-in time placeholder] and [Check-out time placeholder]
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What is the maximum occupancy?
              </h3>
              <p className="text-gray-700">
                [Maximum occupancy placeholder]
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Is this a private rental?
              </h3>
              <p className="text-gray-700">
                Yes, this is a private cottage rental for friends and family. 
                Bookings are by invitation and require confirmation.
              </p>
            </div>
          </div>
        </section>

        {/* House Rules Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            House Rules
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Pet Policy
              </h3>
              <p className="text-gray-700">
                [Pet policy placeholder - e.g., "Pets allowed / not allowed"]
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Noise & Quiet Hours
              </h3>
              <p className="text-gray-700">
                [Noise policy placeholder]
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Parking
              </h3>
              <p className="text-gray-700">
                [Parking information placeholder]
              </p>
            </div>
          </div>
        </section>

        {/* What's Provided Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            What's Provided
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li>• [Linens - placeholder]</li>
            <li>• [Towels - placeholder]</li>
            <li>• [Wi-Fi - placeholder]</li>
            <li>• [Kitchen equipment - placeholder]</li>
            <li>• [Additional items - placeholder]</li>
          </ul>
        </section>

        {/* Booking & Payment Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Booking & Payment
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How do I book?
              </h3>
              <p className="text-gray-700">
                Submit an inquiry through the Contact page. All bookings require 
                confirmation and are subject to availability.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                When will I receive the exact address?
              </h3>
              <p className="text-gray-700">
                The exact address will be provided upon confirmed booking for privacy reasons.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Payment
              </h3>
              <p className="text-gray-700">
              Venmo payment details will be provided after booking is confirmed.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

