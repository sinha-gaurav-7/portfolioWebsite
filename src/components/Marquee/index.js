import React from "react";
import Image from "next/image";

const Marquee = ({ images }) => {
  return (
    <div className="marquee-wrapper overflow-hidden whitespace-nowrap pb-20">
      <div className="marquee-content flex">
        {images.concat(images).map((image, index) => (
          <div key={index} className="mx-2">
            <Image
              src={image.src}
              alt={image.alt}
              width={250}
              height={200}
              className="rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
