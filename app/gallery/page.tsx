export default function Gallery() {
  // Placeholder data for gallery items
  // Replace with actual image sources when images are available
  const galleryItems = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    alt: `Cottage image ${i + 1}`,
  }))

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-4">
          Photo Gallery
        </h1>
        <p className="text-gray-700 text-center mb-12 max-w-2xl mx-auto">
          Explore our cottage and surrounding areas through these photos.
        </p>

        {/* Responsive Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
              // Placeholder div - will be replaced with Next/Image component when images are available
              // onClick handler for lightbox will be added in future task
            >
              <p className="text-gray-500 text-sm text-center px-2">
                Image {item.id}
                <br />
                <span className="text-xs">(Placeholder)</span>
              </p>
            </div>
          ))}
        </div>

        {/* Note for future lightbox implementation */}
        {/* Lightbox functionality will be added in a future task */}
        {/* Clicking on images will open them in a lightbox overlay */}
      </div>
    </div>
  )
}

