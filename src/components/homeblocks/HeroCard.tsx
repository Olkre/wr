import React from "react";

interface HeroCardProps {
  title: string;
  description: string;
  imageUrl: string;
  overlayImageUrl?: string;
}

const HeroCard = ({
  title,
  description,
  imageUrl,
  overlayImageUrl,
}: HeroCardProps) => {
  return (
    <div className="w-96 h-96 relative bg-white rounded-3xl">
      <div className="w-96 h-96 left-[53.16px] top-[0.19px] absolute rounded-3xl overflow-hidden">
        {overlayImageUrl && (
          <img
            className="w-96 h-96 left-[-72.26px] top-[-147.51px] absolute"
            src={overlayImageUrl}
            alt="Background overlay"
          />
        )}
        <img
          className="w-96 h-96 left-0 top-[-0px] absolute rounded-2xl"
          src={imageUrl}
          alt="Main product"
        />
      </div>
      <div className="w-96 h-96 left-[824.74px] top-[0.19px] absolute bg-neutral-100 rounded-3xl" />
      <div className="h-96 left-[865.84px] top-[338.65px] absolute flex-col justify-end items-start gap-6 inline-flex">
        <div className="self-stretch justify-start items-center gap-10 inline-flex">
          <div className="h-8 px-0.5 pt-2.5 pb-1.5 justify-center items-center flex overflow-hidden" />
          <div className="justify-start items-start gap-5 flex">
            <div className="text-black text-base font-normal font-['Inter']">
              Learn More
            </div>
            <div className="text-black text-base font-normal font-['Inter']">
              →
            </div>
          </div>
        </div>
        <div className="self-stretch h-72 flex-col justify-start items-start gap-4 flex">
          <div className="self-stretch text-black text-5xl font-semibold font-['PP Acma'] leading-10">
            {title}
          </div>
          <div className="self-stretch text-black text-base font-normal font-['Inter'] leading-snug">
            {description}
          </div>
        </div>
        <button className="px-8 py-6 bg-amber-300 rounded-3xl justify-start items-start gap-1.5 inline-flex">
          <span className="text-center text-black text-base font-semibold font-['Uncut Sans Variable'] leading-tight">
            View Products
          </span>
        </button>
      </div>
    </div>
  );
};

// // Helper component for the cart icon
// const CartIcon = () => (
//   <svg
//     width="21"
//     height="21"
//     viewBox="0 0 21 21"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <g clipPath="url(#clip0_1_2319)">
//       <path
//         d="M14.3209 15.8288C14.0735 15.5814 13.7379 15.4424 13.388 15.4424C12.6557 15.4424 12.0686 16.0295 12.0686 16.7618C12.0686 17.1117 12.2076 17.4473 12.455 17.6947C12.7025 17.9421 13.0381 18.0811 13.388 18.0811C13.7379 18.0811 14.0735 17.9421 14.3209 17.6947C14.5683 17.4473 14.7074 17.1117 14.7074 16.7618C14.7074 16.4118 14.5683 16.0763 14.3209 15.8288Z"
//         fill="black"
//       />
//       <path
//         d="M7.72401 15.8288C7.47657 15.5814 7.14098 15.4424 6.79106 15.4424C6.0588 15.4424 5.47168 16.0295 5.47168 16.7618C5.47168 17.1117 5.61069 17.4473 5.85812 17.6947C6.10555 17.9421 6.44114 18.0811 6.79106 18.0811C7.14098 18.0811 7.47657 17.9421 7.72401 17.6947C7.97144 17.4473 8.11044 17.1117 8.11044 16.7618C8.11044 16.4118 7.97144 16.0763 7.72401 15.8288Z"
//         fill="black"
//       />
//       <path
//         fillRule="evenodd"
//         clipRule="evenodd"
//         d="M12.5381 5.26598C12.5381 4.986 12.3274 4.73298 12.0474 4.73298H5.04913C4.59469 4.73298 4.18088 4.47124 3.98614 4.06063L3.97416 4.03536C3.69861 3.45434 3.11307 3.08398 2.47003 3.08398H1.65201C1.2849 3.08398 0.987305 3.38158 0.987305 3.74869C0.987305 4.1158 1.2849 4.4134 1.65201 4.4134H2.47003C2.59955 4.4134 2.71748 4.48799 2.77298 4.60502L3.28399 5.68251L5.62101 10.6103C5.75274 10.8881 5.71662 11.2164 5.52765 11.4589C4.67571 12.5522 5.45473 14.1469 6.84074 14.1469H15.1237C15.4908 14.1469 15.7884 13.8493 15.7884 13.4822C15.7884 13.1151 15.4908 12.8175 15.1237 12.8175H6.84074C6.56158 12.8175 6.40467 12.4963 6.57626 12.2761L6.58348 12.2668C6.8064 11.9807 7.1488 11.8135 7.51146 11.8135H12.7837C13.3935 11.8135 13.9545 11.4801 14.246 10.9444L15.2031 9.18539C15.3934 8.83567 15.133 8.3962 14.7529 8.27778C14.4795 8.19262 14.1773 8.28914 14.0404 8.54066L13.0782 10.309C13.0195 10.4169 12.9065 10.4841 12.7837 10.4841H7.77659C7.32215 10.4841 6.90834 10.2223 6.71361 9.81173L5.7325 7.74298C5.36232 6.96241 5.93159 6.06239 6.79549 6.06239H11.8345C12.2418 6.06239 12.5381 5.67333 12.5381 5.26598Z"
//         fill="black"
//       />
//       <path
//         d="M15.2639 6.93265L16.1823 3.87363"
//         stroke="black"
//         strokeWidth="1.32941"
//         strokeLinecap="round"
//       />
//       <path
//         d="M17.4053 5.38204L14.1779 5.38267"
//         stroke="black"
//         strokeWidth="1.32941"
//         strokeLinecap="round"
//       />
//     </g>
//     <defs>
//       <clipPath id="clip0_1_2319">
//         <rect
//           width="20"
//           height="20"
//           fill="white"
//           transform="translate(0.0927734 0.0810547)"
//         />
//       </clipPath>
//     </defs>
//   </svg>
// );

export default HeroCard;
