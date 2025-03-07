// import { url } from "inspector";
import React, { useEffect, useState } from "react";
//import Category from "./Category";

import cat1 from "../../../public/img/categories/categorie1.png";
import cat2 from "../../../public/img/categories/categorie2.png";
import cat3 from "../../../public/img/categories/categorie3.png";
import cat4 from "../../../public/img/categories/categorie4.png";

const categoriesData = [
  {
    title: "Climbing toys",
    description: "Beautiful furniture combination for modern living spaces",
    reversedClass: "",
    roundingL: "s",
    roundingR: "e",
    image: cat1.src,
  },
  {
    title: "Beds",
    description: "Ergonomic office solutions for productive workspaces",
    reversedClass: "flex-row-reverse",
    roundingL: "e",
    roundingR: "s",
    image: cat3.src,
  },
  {
    title: "Storage boxes and shelves",
    description: "Minimalist bedroom designs for peaceful retreats",
    reversedClass: "",
    roundingL: "s",
    roundingR: "e",
    image: cat4.src,
  },
  {
    title: "Table and desk",
    description: "Space-saving storage solutions for compact homes",
    reversedClass: "flex-row-reverse",
    roundingL: "e",
    roundingR: "s",
    image: cat2.src,
  },
];
const Categories = () => {
  const [isScrolled, setIsScrolled] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`mt-5 grid grid-cols-2 h-fit w-full transition-all duration-300 gap-0 px-1 gap-y-2
        ${
          isScrolled //? "px-0 gap-0" : "px-3 gap-1"
        }`}
    >
      {categoriesData.map((category, index) => (
        <Category
          key={index}
          title={category.title}
          description={category.description}
          isScrolled={isScrolled}
          reversedClass={category.reversedClass}
          roundingL={category.roundingL}
          roundingR={category.roundingR}
          image={category.image || ""}
        />
      ))}
    </div>
  );
};

interface CategoryProps {
  title: string;
  description: string;
  isScrolled: boolean;
  reversedClass: string;
  roundingL: string;
  roundingR: string;
  image: string;
}

const Category: React.FC<CategoryProps> = ({
  title,
  description,
  isScrolled,
  roundingL,
  roundingR,
  image,
}) => {
  return (
    <div className="h-fit">
      <div className="hidden ms-1 me-1"></div>
      <div
        className={`h-[45vh] transition-all duration-300 flex   ${
          isScrolled
            ? " rounded-2xl m" + roundingL + "-5" + " m" + roundingR + "-1"
            : "rounded-sm "
        }`}
        style={{
          backgroundImage: `url("${image}")`,
          //backgroundImage: `url("https://www.apple.com/v/home/ca/images/promos/iphone-16/promo_iphone16_avail__cl72dn7xdfv6_medium_2x.jpg")`,
          backgroundSize: "cover", // Corrected usage
          backgroundPosition: "center bottom", // Corrected usage
        }}
      ></div>
      <div
        className={`space-y-2 bg-slate-300/0 w-[40vw] absolute p-9 ms-8 
        ${isScrolled ? "" : ""}`}
        style={{ marginTop: "-37vh", zIndex: "990" }}
      >
        <h2 className="font-semibold">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
        <br></br>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 mt-9"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          See category →
        </a>
      </div>
    </div>
  );
};

// const Category2: React.FC<CategoryProps> = ({
//   title,
//   description,
//   isScrolled,
//   reversedClass,
//   roundingL,
//   roundingR,
// }) => {
//   return (
//     <div
//       className={`h-[40vh] transition-all duration-300 flex   ${reversedClass} ${
//         isScrolled //? "rounded-xl" : "m-0 rounded-none"
//       }`}
//     >
//       {/* part next to the screen end */}
//       <div
//         className={`h-full transition-all duration-700 bg-white  ${
//           isScrolled ? "w-0 " : "w-5"
//         }`}
//       ></div>
//       <div
//         className={`h-full transition-all duration-700 bg-slate-300  ${
//           isScrolled
//             ? "w-5  rounded-" + roundingL + "-3xl"
//             : "w-10  rounded-" + roundingL + "-lg"
//         }`}
//       ></div>

//       <div
//         className={`space-y-2 bg-slate-300 w-full p-6 px-4
//         ${isScrolled ? "" : ""}`}
//       >
//         <h2 className="font-semibold">{title}</h2>
//         <p className="text-muted-foreground">{description}</p>
//       </div>

//       {/* part near the middle */}
//       <div
//         className={`h-full transition-all duration-700 bg-slate-300
//           ${
//             isScrolled
//               ? "w-9  rounded-" + roundingR + "-3xl"
//               : "w-10  rounded-" + roundingR + "-lg"
//           }`}
//       ></div>
//       <div
//         className={`h-full transition-all duration-700 bg-white  ${
//           isScrolled ? "w-0 " : "w-1"
//         }`}
//       ></div>
//     </div>
//   );
// };

export default Categories;
