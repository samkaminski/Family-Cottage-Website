import CalendarEmbed from '@/components/CalendarEmbed'

export default function Availability() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-4">
          Availability Calendar
        </h1>
        
        <p className="text-gray-700 text-center mb-8 max-w-2xl mx-auto">
          Check available dates for the cottage. The calendar is updated regularly 
          to reflect current bookings and availability.
        </p>

        {/* Calendar Legend */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 max-w-2xl mx-auto">
          <p className="text-sm text-gray-700">
            <strong>Legend:</strong> Busy / shaded dates are unavailable (already booked). 
            Blank dates are available for booking.
          </p>
        </div>

        {/* Calendar Embed */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <CalendarEmbed />
        </div>

        <p className="text-sm text-gray-500 text-center mt-6 max-w-2xl mx-auto">
          Note: Calendar shows availability only. All bookings are subject to confirmation 
          via the inquiry form.
        </p>
      </div>
    </div>
  )
}

