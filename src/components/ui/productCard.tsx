import React from "react";

interface ProductCardProps {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  discount: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  title,
  description,
  price,
  discount,
}) => {
  const discountedPrice = price - (price * discount) / 100;

  return (
    <div className="border rounded-2xl overflow-hidden  w-80 h-fit">
      <img src={imageUrl} alt={title} className="w-full h-auto" />
      <div className="p-4 ">
        <h3 className="text-base font-semibold mb-2 uncut">{title}</h3>
        <p className="mb-4 opacity-70 text-black text-sm font-normal">
          {description}
        </p>
        <div className="flex items-center mb-4">
          <span className="text-xl  font-normal mr-2">
            ${discount > 0 ? discountedPrice.toFixed(2) : price}
          </span>
          {discount > 0 && (
            <span
              className="text-yellow-700 text-xs"
              style={{ marginTop: "-5px" }}
            >
              -{discount}%
            </span>
          )}
        </div>
        <div className="flex gap-1">
          <button className="flex justify-center align-middle items-center bg-neutral-100 rounded-3xl px-4 gap-1.5 py-3 text-xs transition-all font-semibold hover:bg-gray-200">
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.9437 12.6761C12.7334 12.4658 12.4482 12.3477 12.1507 12.3477C11.5283 12.3477 11.0292 12.8467 11.0292 13.4691C11.0292 13.7666 11.1474 14.0518 11.3577 14.2621C11.568 14.4725 11.8533 14.5906 12.1507 14.5906C12.4482 14.5906 12.7334 14.4725 12.9437 14.2621C13.154 14.0518 13.2722 13.7666 13.2722 13.4691C13.2722 13.1717 13.154 12.8864 12.9437 12.6761Z"
                fill="#AF5C00"
              />
              <path
                d="M7.33635 12.6761C7.12603 12.4658 6.84078 12.3477 6.54335 12.3477C5.92093 12.3477 5.42188 12.8467 5.42188 13.4691C5.42188 13.7666 5.54003 14.0518 5.75035 14.2621C5.96066 14.4725 6.24592 14.5906 6.54335 14.5906C6.84078 14.5906 7.12603 14.4725 7.33635 14.2621C7.54667 14.0518 7.66482 13.7666 7.66482 13.4691C7.66482 13.1717 7.54667 12.8864 7.33635 12.6761Z"
                fill="#AF5C00"
              />
              <path
                d="M1.61328 2.40918H2.8736C3.20194 2.40918 3.50091 2.59828 3.64161 2.89495L4.07596 3.81082M6.3943 8.69925H11.6402C11.9516 8.69925 12.238 8.52901 12.3868 8.25551L14.1217 5.06708C14.4299 4.50068 14.0199 3.81082 13.3751 3.81082H4.07596M6.3943 8.69925L4.07596 3.81082M6.3943 8.69925L5.91824 9.31016C5.48323 9.86837 5.881 10.6826 6.5887 10.6826H14.1942"
                stroke="#AF5C00"
                strokeWidth="1.13"
              />
            </svg>
            Add to bazar
          </button>
          <button className="flex justify-center align-middle items-center bg-neutral-100/0 rounded-3xl px-4 gap-1.5 py-3 text-xs transition-all font-semibold hover:bg-gray-200">
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.3163 8.17062H10.9663H11.6163C11.6163 6.82362 12.7335 5.70957 14.1408 5.70957C15.5481 5.70957 16.6653 6.82362 16.6653 8.17062C16.6653 9.19205 16.1893 9.90615 15.1403 10.9472C14.8694 11.2159 14.5616 11.5048 14.2231 11.8226C13.3175 12.6726 12.1921 13.729 10.9663 15.1582C9.74047 13.729 8.61505 12.6726 7.70941 11.8226C7.37091 11.5048 7.06312 11.2159 6.79226 10.9472C5.74322 9.90615 5.26719 9.19205 5.26719 8.17062C5.26719 6.82362 6.38442 5.70957 7.79173 5.70957C9.19903 5.70957 10.3163 6.82362 10.3163 8.17062Z"
                stroke="black"
                strokeWidth="1.3"
              />
            </svg>
            Mark as Favorite
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
