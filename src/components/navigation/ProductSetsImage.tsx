import React from "react";
import setImage from "../../../public/img/navproducts/set.png";
import setImageHover from "../../../public/img/navproducts/setHovered.png";

// Define prop types for ProductSetsImage
interface ProductSetsImageProps {
  isHovered: boolean;
}

const ProductSetsImage: React.FC<ProductSetsImageProps> = ({ isHovered }) => {
  return (
    <div className="setContainer mb-2 mt-4 text-lg font-medium relative">
      {/* Base image with opacity transition */}
      <img
        src={setImage.src}
        alt="Description"
        className="w-full h-auto"
        style={{
          transition: "opacity 0.5s ease-in-out",
          opacity: isHovered ? 0 : 1, // Show or hide based on hover state
        }}
      />

      {/* Hover image */}
      <img
        src={setImageHover.src}
        alt="Description"
        className="absolute inset-0 w-full h-full"
        style={{
          transition: "opacity 0.5s ease-in-out",
          opacity: isHovered ? 1 : 0, // Show or hide based on hover state
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />
    </div>
  );
};

export default ProductSetsImage;
