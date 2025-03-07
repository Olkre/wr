import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface ScrollImageSequenceProps {
  imageCount: number;
  containerStyle?: React.CSSProperties;
  imageStyle?: React.CSSProperties;
}

const ScrollImageSequence: React.FC<ScrollImageSequenceProps> = ({
  imageCount,
  containerStyle = {},
  imageStyle = {},
}) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Generate image paths dynamically
  const getImageSrc = (index: number) => `/images/image${index + 1}.jpg`;

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollTop = containerRef.current.scrollTop;
        const maxScroll =
          containerRef.current.scrollHeight - containerRef.current.clientHeight;
        const scrollPercentage = scrollTop / maxScroll;
        setScrollPosition(scrollPercentage);
      }
    };

    const container = containerRef.current;
    container?.addEventListener("scroll", handleScroll);

    return () => {
      container?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const currentImageIndex = Math.floor(scrollPosition * (imageCount - 1));

  return (
    <div ref={containerRef} style={{ overflowY: "scroll", ...containerStyle }}>
      <div style={{ position: "relative", width: "100%", height: "auto" }}>
        <Image
          src={getImageSrc(currentImageIndex)}
          alt={`Image ${currentImageIndex}`}
          layout="responsive"
          width={1920}
          height={1080}
          style={imageStyle}
        />
      </div>
    </div>
  );
};

export default ScrollImageSequence;
