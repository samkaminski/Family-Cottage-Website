export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center space-y-4">
          {/* Friends and Family Note */}
          <p className="text-gray-600 text-sm">
            This is a private rental.
          </p>

          {/* General Location */}
          <p className="text-gray-600 text-sm">
            Located in Leelanau County on Lime Lake
          </p>

          {/* Venmo Payment Placeholder */}
          <div className="pt-4 border-t border-gray-200">
            <p className="text-gray-600 text-sm mb-2">Payment via Venmo</p>
            <p className="text-gray-500 text-xs italic">
            Venmo payment details will be provided after booking is confirmed
            </p>
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-xs mt-6">
            © {new Date().getFullYear()} Kaminski Cottage Rental
          </p>
        </div>
      </div>
    </footer>
  )
}

