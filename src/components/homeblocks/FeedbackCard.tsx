interface FeedbackCardProps {
  imageUrl: string;
  title: string;
  description: string;
  author: string;
  date: string;
  authorImageUrl: string;
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({
  imageUrl,
  title,
  description,
  author,
  date,
  authorImageUrl,
}) => {
  return (
    <div className="flex items-center flex-col">
      <div
        className="w-[350px] h-[350px] bg-[#D4D6D5] rounded-t-3xl"
        style={{
          backgroundImage: `url("${imageUrl}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div
        className="w-[350px] h-[180px] bg-[#D4D6D550] rounded-t-3xl"
        style={{
          backgroundImage: `url("${imageUrl}")`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          transform: "scaleY(-1)",
        }}
      ></div>
      <div
        className="w-[350px] h-[180px] bg-[#D4D6D550] rounded-b-3xl"
        style={{
          marginTop: "-178px",
          zIndex: "990",
          background:
            "linear-gradient(180deg, rgba(249,249,246,0) 0%, rgba(249,249,246,0.5088629201680672) 61%, rgba(249,249,246,1) 93%)",
        }}
      ></div>
      <div
        className="w-[320px] h-[240px] bg-[#FFFFFF] rounded-3xl border p-6"
        style={{
          marginTop: "-190px",
          zIndex: 999,
        }}
      >
        <div className="flex pb-3">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_7_1872)">
                <path
                  d="M8.19017 10.5935C8.07654 10.5935 7.96348 10.5586 7.86617 10.4891L5.5782 8.84833L3.29023 10.4891C3.19544 10.5573 3.08152 10.5938 2.96474 10.5934C2.84796 10.593 2.7343 10.5557 2.63998 10.4869C2.54557 10.4184 2.47516 10.322 2.43875 10.2112C2.40234 10.1004 2.4018 9.98094 2.4372 9.86983L3.29051 7.11583L1.02307 5.51805C0.929104 5.4487 0.859316 5.35156 0.823582 5.24037C0.787847 5.12918 0.787976 5.00957 0.82395 4.89845C0.860207 4.78761 0.930382 4.69097 1.02456 4.62218C1.11873 4.55339 1.23214 4.51594 1.34876 4.51511L4.15704 4.51089L5.05114 1.82524C5.08804 1.7146 5.1588 1.61837 5.25342 1.55019C5.34804 1.482 5.46171 1.44531 5.57834 1.44531C5.69497 1.44531 5.80864 1.482 5.90326 1.55019C5.99788 1.61837 6.06865 1.7146 6.10554 1.82524L6.98445 4.51089L9.80707 4.51511C9.92383 4.51577 10.0374 4.5532 10.1317 4.6221C10.226 4.69099 10.2961 4.78783 10.3322 4.89888C10.3683 5.00992 10.3685 5.12951 10.3327 5.24066C10.297 5.35181 10.2271 5.44887 10.133 5.51805L7.86561 7.11583L8.71892 9.86983C8.75439 9.98091 8.75391 10.1003 8.71756 10.2111C8.6812 10.3219 8.61081 10.4184 8.51642 10.4869C8.42181 10.5563 8.3075 10.5936 8.19017 10.5935Z"
                  fill="#FFAC33"
                />
              </g>
              <defs>
                <clipPath id="clip0_7_1872">
                  <rect
                    width="10.125"
                    height="10.125"
                    fill="white"
                    transform="translate(0.515625 0.853516)"
                  />
                </clipPath>
              </defs>
            </svg>
          ))}
        </div>
        <h2 className=" text-black text-xl font-medium uncut">{title}</h2>
        <p className="pb-4">{description}</p>
        <div className="h-5 w-full justify-between items-center inline-flex">
          <div className="justify-start items-center gap-2.5 flex">
            <img
              className="w-5 h-5 rounded-xl"
              src={authorImageUrl}
              alt={author}
            />
            <div className="text-black text-sm font-normal ">{author}</div>
          </div>
          <div className="text-black text-xs font-normal ">{date}</div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
