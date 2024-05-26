import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="/https://links.papareact.com/0fm" // Update the src to remove the full URL
        layout="fill"
        objectFit="cover"
        alt="Cover Photo"
      />
      <div className="absolute top-1/2 text-center w-full">
        <p className="text-sm lg:text-lg">Not sure where to go? Perfect.</p>
        <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-lg font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          I'm flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
