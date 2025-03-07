import React, { useEffect, useState } from "react";
import firstbanner from "../../../public/img/firstblock3.jpg"; // Adjust this path to your image

const BannerComponent: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex bg-white flex-col ${
        isScrolled
          ? "px-9 transition-all duration-500"
          : "p-0 transition-all duration-500"
      }`}
      id="topblock"
    >
      <div
        className={`h-[70vh] w-full mb-5 -mt-5 transition-all duration-500 bg-slate-50 ${
          isScrolled ? "rounded-2xl" : "rounded-xl"
        }`}
      >
        <div
          className={`w-full h-full m-0 p-0 bg-cover bg-center transition-all duration-300 ${
            isScrolled ? "rounded-2xl" : "rounded-none"
          }`}
          style={{
            backgroundImage: `url(${firstbanner.src})`,
            backgroundPosition: "center", // Static position
          }}
        ></div>
      </div>

      <div className="w-[40vw] md:w-[68vw] sm:w-[90vw] mx-auto text-center py-5">
        <h1 className="text-6xl px-8">
          Personalized montessori furniture for active kids
        </h1>
        <p className="mt-3 text-lg px-6">
          Shop our selection of durable and kid-friendly furniture, including
          bunk beds, play tables, and chairs.
        </p>
        <div className="flex w-fit mx-auto gap-3 mt-3">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-7 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get the Arc
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-2 sm:px-5 "
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
          >
            All products
          </a>
        </div>
      </div>
    </div>
  );
};

export default BannerComponent;
