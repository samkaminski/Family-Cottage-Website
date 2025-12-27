# Cottage Rental Website

A private friends-and-family cottage rental website built with Next.js App Router and Tailwind CSS.

## Project Overview

This is a static-first website for managing a private cottage rental. It includes pages for home, gallery, availability calendar, FAQ/rules, and contact inquiry form.

## Technology Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Hosting:** Vercel (planned)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build

Build the production version:
```bash
npm run build
```

### Start Production Server

Start the production server (after build):
```bash
npm start
```

## Project Structure

- `/app` - Next.js App Router pages and layouts
- `/components` - Reusable React components (to be created)
- `/public` - Static assets (images, etc.)

## Dependencies

### Production Dependencies
- `react` - React library
- `react-dom` - React DOM rendering
- `next` - Next.js framework

### Development Dependencies
- `typescript` - TypeScript compiler
- `@types/node` - Node.js type definitions
- `@types/react` - React type definitions
- `@types/react-dom` - React DOM type definitions
- `tailwindcss` - Tailwind CSS framework
- `postcss` - CSS post-processor
- `autoprefixer` - CSS vendor prefixer
- `eslint` - Code linting
- `eslint-config-next` - Next.js ESLint configuration

## Root Layout

The root layout (`app/layout.tsx`) provides the basic HTML structure for all pages. It includes:
- Basic `<html>` and `<body>` structure with flexbox layout for sticky footer
- Metadata configuration (title and description)
- Global CSS import
- Header component
- Footer component

The layout uses a flex column structure (`flex flex-col min-h-screen`) to ensure the footer stays at the bottom of the page.

## Global CSS

The global CSS file (`app/globals.css`) includes Tailwind CSS directives:
- `@tailwind base` - Tailwind base styles
- `@tailwind components` - Tailwind component classes
- `@tailwind utilities` - Tailwind utility classes

No custom styles are included yet beyond these Tailwind directives.

## Header Component

The Header component (`components/Header.tsx`) provides site navigation and branding. It includes:

- **Navigation Links:**
  - Home (/)
  - Gallery (/gallery)
  - Availability (/availability)
  - FAQ / Rules (/faq)
  - Contact (/contact)

- **Responsive Behavior:**
  - **Desktop (md and above):** Horizontal navigation menu displayed in the header
  - **Mobile (below md breakpoint):** Hamburger menu button that toggles a dropdown menu
  
- **Implementation:** Uses Next.js `Link` component for client-side navigation. The mobile menu is controlled by React state (`useState`) and toggles visibility on button click.

- **Styling:** Minimal Tailwind CSS styling with clean borders and hover states. No active link styling is currently implemented.

## Footer Component

The Footer component (`components/Footer.tsx`) appears at the bottom of all pages and includes:

- **Friends and Family Note:** Clear messaging that this is a private rental
- **General Location Placeholder:** Area for general location description (explicitly NOT an exact address for privacy)
- **Venmo Payment Placeholder:** Section reserved for future Venmo link and QR code integration
- **Copyright:** Dynamic year display

**Note:** The footer currently uses placeholder text. Actual location details and Venmo integration will be added in future tasks. The Venmo section is prepared but not yet functional.

## Home Page

The Home page (`app/page.tsx`) serves as the landing page for the cottage rental site. It includes:

- **Hero Section:**
  - Main heading and welcoming description
  - Placeholder area for hero image (currently a gray div with placeholder text)
  - Hero image will be added later in the `public` directory

- **Highlights / Photos Section:**
  - Grid of three placeholder areas for highlight photos
  - Responsive layout: single column on mobile, three columns on desktop
  - Placeholder divs will be replaced with actual images when available

- **Amenities Overview:**
  - Two-column layout (stacks on mobile)
  - Left column: List of amenities (currently with placeholder items)
  - Right column: General location information (explicitly NOT exact address)
  - Privacy note about exact address being provided after booking

- **Call-to-Action Section:**
  - "Ready to Book?" heading and description
  - Button linking to `/contact` page using Next.js `Link` component

**Note:** All content uses placeholder text (lorem-style descriptions) and placeholder divs for images. Actual images and final content will be added in future tasks. The structure is fully responsive and ready for content integration.

## Gallery Page

The Gallery page (`app/gallery/page.tsx`) displays a photo gallery of the cottage and surroundings. It includes:

- **Page Header:**
  - "Photo Gallery" heading
  - Brief description text

- **Responsive Image Grid:**
  - 12 placeholder items arranged in a responsive grid
  - Layout: 1 column on mobile, 2 columns on tablets, 3 columns on desktop
  - Placeholder divs with gray backgrounds and item numbers
  - Hover effect (opacity change) for visual feedback

- **Structure for Future Enhancements:**
  - Grid items are structured to easily support Next.js `Image` component integration
  - Ready for lightbox functionality (commented notes indicate where lightbox will be added)
  - Click handlers will be implemented in a future task

**Note:** No actual images are used yet. All gallery items are placeholder divs. Image optimization and lightbox functionality are planned for future implementation. The grid layout is fully responsive and maintains proper aspect ratios.

## Availability Page

The Availability page (`app/availability/page.tsx`) displays a Google Calendar embed showing cottage availability. It includes:

- **Page Header:**
  - "Availability Calendar" heading
  - Explanatory text about calendar updates

- **Calendar Legend:**
  - Clear explanation that busy/shaded dates are unavailable
  - Blank dates indicate availability

- **Calendar Embed Component:**
  - Reusable `CalendarEmbed` component (`components/CalendarEmbed.tsx`)
  - Responsive iframe that is full-width and scrollable
  - Currently uses a placeholder calendar URL (must be replaced with actual Google Calendar embed URL)

**Google Calendar Setup:**
- The calendar embed URL must be replaced in `components/CalendarEmbed.tsx`
- The Google Calendar must be configured with "See only free/busy (hide details)" sharing settings
- Calendar embed URL format: `https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID`
- The calendar is read-only on the website (users cannot modify it)

**Note:** No actual calendar is embedded yet. The iframe uses a placeholder src that must be replaced with the actual Google Calendar embed URL when available.

## FAQ / Rules Page

The FAQ / Rules page (`app/faq/page.tsx`) provides information about the cottage rental. It includes:

- **Page Header:**
  - "FAQ & House Rules" heading
  - Brief description

- **Content Sections:**
  - **General Questions:** Check-in/out times, maximum occupancy, privacy note
  - **House Rules:** Pet policy, noise/quiet hours, parking information
  - **What's Provided:** List of amenities and items included
  - **Booking & Payment:** Booking process, address disclosure, payment information

- **Layout:**
  - Simple static layout with clear section headings
  - Clean, readable spacing using Tailwind CSS
  - Responsive design (stacks appropriately on mobile)

**Note:** All content is currently placeholder text. The structure is in place with appropriate headings and sections, but actual FAQ content and house rules need to be filled in. No accordion or interactive features are implemented - the page is static and straightforward for easy maintenance.

## Next Steps

- Contact form page
- Form integration (Formspree/Web3Forms)
- Venmo link and QR code implementation
- Image integration (replace placeholders with actual images)
- Lightbox functionality for gallery
- Google Calendar ID configuration
- Content filling (FAQ text, house rules, etc.)
- Deployment configuration

