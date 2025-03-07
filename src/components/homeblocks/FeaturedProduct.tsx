import React from "react";
// import { Button } from "./ui/button";

interface FeaturedProductProps {
  title: string;
  description: string;
  imageUrl: string;
  overlayImageUrl?: string;
}

const FeaturedProduct = ({
  title,
  description,
  imageUrl,
  overlayImageUrl,
}: FeaturedProductProps) => {
  return (
    <div className="relative bg-white rounded-3xl w-[1200px] h-[500px] mx-auto mt-6">
      {/* Image Section */}
      <div className="absolute left-6 top-0 w-[500px] h-[500px] rounded-3xl overflow-hidden">
        {overlayImageUrl && (
          <img
            className="absolute w-full h-full object-cover"
            src={overlayImageUrl}
            alt="Background overlay"
          />
        )}
        <img
          className="absolute w-full h-full object-cover rounded-2xl"
          src={imageUrl}
          alt="Main product"
        />
      </div>

      {/* Content Section */}
      <div className="absolute right-6 top-0 w-[600px] h-full bg-neutral-100 rounded-3xl p-12 flex flex-col justify-between">
        {/* Learn More Link */}
        <div className="flex justify-end items-center gap-2">
          <span className="uncut text-base">Learn More</span>
          <span className="uncut text-base">→</span>
        </div>

        {/* Text Content */}
        <div className="space-y-4">
          <h2 className="text-4xl font-semibold leading-tight">{title}</h2>
          <p className="uncut text-base leading-relaxed">{description}</p>
          <button className="mt-6">View Products</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
