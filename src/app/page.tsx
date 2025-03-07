"use client";

import BannerComponent from "@/components/homeblocks/BannerComponent";

import Categories from "@/components/homeblocks/Categories";
import Benefits from "@/components/homeblocks/Benefits";

import stylish from "../../public/img/home/stylish.png";
import family from "../../public/img/home/family.png";

import ProductGrid from "@/components/homeblocks/ProductGrid";
import FeedbackCard from "@/components/homeblocks/FeedbackCard";

// import CustomCanvas from "@/components/homeblocks/test3d";

export default function Home() {
  return (
    <div>
      <BannerComponent />

      <Categories />

      <Benefits />

      {/* stylish block */}
      <div className="p-9 pe-0 h-[80vh] flex gap-4">
        <div
          className="bg-slate-400 rounded-3xl h-full w-[70vw]"
          style={{
            backgroundImage: `url(${stylish.src})`,
            backgroundSize: "cover",
          }}
        ></div>
        <div className="bg-slate-100 rounded-3xl h-full w-full rounded-e-none flex flex-col justify-end">
          <div className="w-[50vw] mx-auto  p-8 mt-7 pt-7">
            <div className="flex ">
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.2207 9.98535H29.8874V13.9854H27.2207L28.554 25.9854H25.2207L24.474 19.3187H8.63404L7.88737 25.9854H4.55404L5.88737 13.9854H3.2207V9.98535ZM23.8874 13.9854H9.2207L8.9407 16.652H24.1674L23.8874 13.9854Z"
                  fill="#D0842B"
                />
              </svg>
            </div>
            <br />

            <h1 className="text-4xl ">
              Raising the Bar for Kids Furniture: Eco-friendly & Stylish
            </h1>
            <p className="mt-3 text-lg ">
              Our website offers a wide range of eco-friendly, high-quality and
              unique kids furniture made from sustainable materials, ensuring
              safety for kids and the environment.
            </p>
            <div className="flex w-fit gap-3 mt-3">
              <a
                className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-white mb-8 dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-2 sm:px-5"
                href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                target="_blank"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>

      <ProductGrid />

      <div className="bg-red-100 rounded-3xl h-[80vh] mx-9 relative overflow-hidden">
        <br></br>
        <div
          className="absolute w-[50vw] mx-9 p-12 mt-7  flex flex-col z-100"
          style={{ zIndex: 1000 }}
        >
          <div className="flex ">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.9995 1.4375C11.5189 1.4375 7.87452 5.08187 7.87452 9.5625C7.87452 14.0431 11.5189 17.6875 15.9995 17.6875C20.4801 17.6875 24.1245 14.0431 24.1245 9.5625C24.1245 5.08187 20.4801 1.4375 15.9995 1.4375ZM14.2961 4.65744C14.5711 4.36107 15.0561 4.64864 14.928 5.03216C14.8414 5.29142 15.0517 5.55347 15.3236 5.52499L17.5492 5.29183C17.7846 5.26716 17.9398 5.03476 17.8724 4.80784L17.868 4.79286C17.7853 4.51449 18.0411 4.25385 18.3209 4.33134C18.4811 4.37568 18.592 4.52142 18.592 4.68759V5.0383C18.592 5.36372 18.8445 5.63329 19.1692 5.65447L19.2973 5.66282C19.6534 5.68605 19.9283 5.3545 19.8394 5.00884C19.7809 4.7811 19.881 4.54223 20.0845 4.42438L20.1306 4.39769C20.3469 4.27242 20.6202 4.294 20.8021 4.46542C22.1557 5.74096 22.9995 7.55109 22.9995 9.5625C22.9995 10.4165 22.8473 11.2342 22.5686 11.9902C22.454 12.3009 22.1712 12.5126 21.8447 12.5678L21.5667 12.6149C21.0857 12.6963 20.7336 13.113 20.7336 13.6009V14.3336C20.7336 14.5819 20.6313 14.8211 20.4393 14.9786C20.405 15.0068 20.3704 15.0346 20.3355 15.0621C20.0117 15.3175 19.5477 15.2119 19.3247 14.8649C19.1471 14.5887 18.811 14.4596 18.4942 14.546L18.4118 14.5685C17.9953 14.6821 17.7473 15.1092 17.8552 15.5272C17.961 15.9368 17.7254 16.3618 17.3098 16.4403C16.8783 16.5219 16.4397 16.5629 15.9995 16.5625C14.4214 16.5625 12.9671 16.0432 11.7977 15.1657C11.4692 14.9192 11.6269 14.4304 12.0337 14.3743C12.1949 14.3521 12.335 14.2525 12.4088 14.1075L12.6717 13.5916C12.9237 13.0968 12.7245 12.4915 12.2278 12.2432L11.705 11.9818C11.1144 11.6865 11.0167 10.8842 11.5192 10.4558C11.9546 10.0846 11.9502 9.41059 11.51 9.04513L11.0724 8.68183C10.8458 8.49374 10.5382 8.43599 10.2588 8.52909C9.67703 8.72299 9.09402 8.25458 9.25937 7.66406C9.61347 6.39946 10.3128 5.28077 11.25 4.41563C11.6657 4.03187 12.2956 4.31951 12.3658 4.88092L12.4023 5.17307C12.4689 5.7053 13.1268 5.91739 13.4916 5.52424L14.2961 4.65744ZM18.2866 7.46057C18.0436 7.41934 17.7939 7.47019 17.5863 7.60318L16.7599 8.13271C16.2019 8.49025 16.1397 9.28184 16.6351 9.72212L17.3162 10.3276C17.5075 10.4976 17.7728 10.5572 18.0184 10.4854L18.2099 10.4294C18.6161 10.3107 19.0156 10.6349 18.9832 11.0568C18.9514 11.4692 19.3335 11.7912 19.7345 11.6901L20.3818 11.5269C20.9824 11.3755 21.3023 10.7202 21.0523 10.1535L20.6662 9.27858C20.5913 9.10888 20.4223 9.00036 20.2368 9.00293L20.0072 9.00612C19.653 9.01104 19.4863 8.57055 19.7549 8.33965C19.9984 8.13042 19.8878 7.73218 19.5713 7.67849L18.2866 7.46057ZM15.3488 10.6219C15.4323 10.3454 15.1537 10.098 14.889 10.2135C14.6504 10.3175 14.6135 10.6405 14.8223 10.7958C15.0106 10.9359 15.2809 10.8466 15.3488 10.6219ZM13.0888 10.7604C12.9127 10.4489 12.48 10.4084 12.2492 10.6819C12.0548 10.9124 12.0998 11.2599 12.3464 11.4333C12.7944 11.7481 13.3582 11.237 13.0888 10.7604ZM17.1419 11.1101C16.7764 10.8723 16.2838 10.9973 16.0783 11.3819L15.7701 11.959C15.6759 12.1353 15.7298 12.3542 15.895 12.4667L16.7536 13.0513C16.939 13.1775 17.1611 12.9522 17.0322 12.7686C16.9798 12.6939 16.984 12.5933 17.0426 12.5232L17.3077 12.2065C17.5924 11.8661 17.5139 11.3522 17.1419 11.1101ZM3.76015 12.3788C3.20902 12.3703 2.64496 13.0721 2.64171 14.8714C2.64094 15.31 2.63353 15.6985 2.62675 16.0544C2.59086 17.9377 2.57241 18.9059 3.64652 21.5309C3.74182 21.7638 3.83176 21.9912 3.91962 22.2133C4.65445 24.0712 5.24314 25.5596 7.59296 26.7969C7.84795 26.9312 8.04926 27.1584 8.1128 27.4395C8.29263 28.2349 8.20862 28.5956 8.04197 29.3111C8.01995 29.4056 7.9965 29.5063 7.97202 29.615C7.74727 30.6134 10.061 30.7969 11.7554 29.9558C13.5736 28.9641 13.421 26.2335 13.0962 24.3818C12.7952 22.6658 11.9793 22.0331 11.139 21.3813C10.9545 21.2383 10.7689 21.0943 10.5873 20.9378C10.5287 20.8873 10.477 20.8294 10.4345 20.7648C10.0626 20.1981 9.79021 19.4794 9.5108 18.7422C9.02736 17.4668 8.523 16.1362 7.44627 15.4424C7.12314 15.2342 5.61804 15.0232 7.09777 19.4788C7.35462 20.2522 6.65286 20.9699 6.09395 20.3769C4.98324 19.1983 4.92531 17.2455 4.87038 15.3943C4.85407 14.8444 4.83802 14.3034 4.79471 13.7944C4.72258 12.9468 4.2464 12.3863 3.76015 12.3788Z"
                fill="#5471FF"
              />
              <path
                d="M27.2045 13.7946C27.2767 12.947 27.7528 12.3865 28.2391 12.379C28.7902 12.3704 29.3543 13.0723 29.3575 14.8717C29.3624 17.6312 29.6298 18.4101 28.3527 21.531C27.4163 23.8197 26.9963 25.5787 23.9997 27.0002C23.6447 28.2515 23.7864 28.5458 24.0272 29.6152C24.252 30.6135 21.9383 30.797 20.2438 29.956C18.4257 28.9642 18.5782 26.2337 18.903 24.382C19.2807 22.2286 20.4693 21.781 21.4995 20.8613C22.5692 19.3315 22.8181 16.5604 24.553 15.4425C24.9153 15.2091 26.7637 14.972 24.2241 21.3139C27.5723 20.4847 26.9624 16.6406 27.2045 13.7946Z"
                fill="#5471FF"
              />
            </svg>
          </div>
          <br />

          <h1 className="text-4xl ">
            Eco-Friendly Furniture for Kids: Making a Difference
          </h1>
          <p className="mt-3 text-lg ">
            We provide eco-friendly, high-quality and unique kids furniture made
            from sustainable materials, ensuring safety for kids and the
            environment.
          </p>
          <div className="flex w-fit gap-3 mt-3">
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-white mb-8 dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-2 sm:px-5"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
            >
              Learn more
            </a>
          </div>
        </div>
        <video
          src={`/img/home/Ecobg.mp4`}
          muted
          playsInline
          preload="auto"
          loop
          autoPlay
          className="absolute top-0 left-0 w-full h-full object-cover"
        ></video>
      </div>

      {/* Feedback block */}
      <div className="bg-[#F9F9F6] pt-2 rounded-3xl mt-6">
        <div className="flex items-center justify-between mb-3 px-6">
          <h1 className="text-3xl font-bold">Clients feedback</h1>
          <div className="flex gap-2">
            <button
              onClick={() => {
                const containers =
                  document.querySelectorAll(".scroll-container");
                const feedbackContainer = containers[1]; // Get the second scroll container
                if (feedbackContainer) {
                  feedbackContainer.scrollBy({
                    left: -400,
                    behavior: "smooth",
                  });
                }
              }}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors text-xl font-medium"
            >
              ←
            </button>
            <button
              onClick={() => {
                const containers =
                  document.querySelectorAll(".scroll-container");
                const feedbackContainer = containers[1]; // Get the second scroll container
                if (feedbackContainer) {
                  feedbackContainer.scrollBy({ left: 400, behavior: "smooth" });
                }
              }}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors text-xl font-medium"
            >
              →
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide snap-x snap-mandatory scroll-container">
            <div className="snap-start shrink-0 pl-6">
              <FeedbackCard
                imageUrl="https://i.etsystatic.com/iap/f215a9/5747306025/iap_1000x1000.5747306025_fl8p7dn6.jpg?version=0"
                title="From Tots to Teens: Furniture for Growing Kids"
                description="As your child grows, so does their need for furniture that can keep up. This article will explore furniture"
                author="Jackie D."
                date="Feb 21, 2023"
                authorImageUrl="https://cdn.vectorstock.com/i/500p/82/33/person-gray-photo-placeholder-woman-vector-24138233.jpg"
              />
            </div>
            <div className="snap-start shrink-0">
              <FeedbackCard
                imageUrl="https://i.etsystatic.com/iap/655ba4/4651335167/iap_1000x1000.4651335167_na0xepkg.jpg?version=0"
                title="From Tots to Teens: Furniture for Growing Kids"
                description="As your child grows, so does their need for furniture that can keep up. This article will explore furniture"
                author="Jackie D."
                date="Feb 21, 2023"
                authorImageUrl="https://cdn.vectorstock.com/i/500p/82/33/person-gray-photo-placeholder-woman-vector-24138233.jpg"
              />
            </div>
            <div className="snap-start shrink-0">
              <FeedbackCard
                imageUrl="https://i.etsystatic.com/iap/82f707/4510355169/iap_1000x1000.4510355169_9r0lm1mq.jpg?version=0"
                title="From Tots to Teens: Furniture for Growing Kids"
                description="As your child grows, so does their need for furniture that can keep up. This article will explore furniture"
                author="Jackie D."
                date="Feb 21, 2023"
                authorImageUrl="https://cdn.vectorstock.com/i/500p/82/33/person-gray-photo-placeholder-woman-vector-24138233.jpg"
              />
            </div>
            <div className="snap-start shrink-0">
              <FeedbackCard
                imageUrl="https://i.etsystatic.com/iap/c3baa1/4443911324/iap_1000x1000.4443911324_bgr0t6zy.jpg?version=0"
                title="From Tots to Teens: Furniture for Growing Kids"
                description="As your child grows, so does their need for furniture that can keep up. This article will explore furniture"
                author="Jackie D."
                date="Feb 21, 2023"
                authorImageUrl="https://i.etsystatic.com/iusa/ea3ec8/84491145/iusa_100x100.84491145_8221.jpg?version=0"
              />
            </div>
            <div className="snap-start shrink-0">
              <FeedbackCard
                imageUrl="https://i.etsystatic.com/iap/f215a9/5747306025/iap_1000x1000.5747306025_fl8p7dn6.jpg?version=0"
                title="From Tots to Teens: Furniture for Growing Kids"
                description="As your child grows, so does their need for furniture that can keep up. This article will explore furniture"
                author="Jackie D."
                date="Feb 21, 2023"
                authorImageUrl="https://cdn.vectorstock.com/i/500p/82/33/person-gray-photo-placeholder-woman-vector-24138233.jpg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* family block */}
      <div className="p-9 pe-0 h-[80vh] flex gap-4">
        <div className="bg-slate-100/0 rounded-3xl h-full w-full rounded-e-none flex flex-col justify-end">
          <div className="w-[50vw] mx-auto  p-8 mt-7 pt-7">
            <div className="flex ">
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.2207 9.98535H29.8874V13.9854H27.2207L28.554 25.9854H25.2207L24.474 19.3187H8.63404L7.88737 25.9854H4.55404L5.88737 13.9854H3.2207V9.98535ZM23.8874 13.9854H9.2207L8.9407 16.652H24.1674L23.8874 13.9854Z"
                  fill="#D0842B"
                />
              </svg>
            </div>
            <br />

            <h1 className="text-4xl ">
              Meet Our Team: The Driving Force Behind Our Success
            </h1>
            <p className="mt-3 text-lg ">
              Welcome to our About Us page! We are a dedicated team of
              professionals committed to providing top-notch products and
              services to our valued customers. Our diverse backgrounds and
              expertise come together to create a dynamic and innovative company
              culture.
            </p>
            <div className="flex w-fit gap-3 mt-3">
              <a
                className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-white mb-8 dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-2 sm:px-5"
                href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                target="_blank"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div
          className="bg-slate-400 rounded-s-3xl h-full w-[70vw]"
          style={{
            backgroundImage: `url(${family.src})`,
            backgroundSize: "cover",
          }}
        ></div>
      </div>

      <div className="bg-black mx-9 h-[60vh] rounded-3xl overflow-hidden">
        {/* <CustomCanvas /> */}
      </div>
    </div>
  );
}
