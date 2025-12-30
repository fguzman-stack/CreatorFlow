import React from "react";

interface GalleryProps {
  images: { src: string; alt?: string }[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
    {images.map((img, idx) => (
      <div key={idx} className="overflow-hidden rounded-lg border border-border">
        <img
          src={img.src}
          alt={img.alt || `Imagen ${idx + 1}`}
          className="w-full h-32 object-cover hover:scale-105 transition-transform duration-200"
        />
      </div>
    ))}
  </div>
);

export default Gallery; 