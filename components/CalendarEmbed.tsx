export default function CalendarEmbed() {
  // Placeholder calendar embed URL
  // Replace this src with your actual Google Calendar embed URL
  // Format: https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID
  // Important: Calendar must be set to "See only free/busy (hide details)" in sharing settings
  const calendarSrc = 'https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID_HERE'

  return (
    <div className="w-full overflow-hidden rounded">
      <iframe
        src={calendarSrc}
        className="w-full border-0"
        style={{ height: '600px', minHeight: '400px' }}
        title="Cottage Availability Calendar"
        scrolling="yes"
      />
    </div>
  )
}

