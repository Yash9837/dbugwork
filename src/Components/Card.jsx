import React, { useState } from 'react';

import photo1 from "./img/pic1.png"
import photo2 from "./img/pic2.png"
import photo3 from "./img/pic3.png"

function Card3({
  heading,
  description,
  thumbnailSrc,
  thumbnailAlt = "Thumbnail",
  className,
}) {
  return (
    <div className={`py-2 px-0 flex-auto rounded-3xl p-8 shadow-sm mx-10 ${className}`}>
      <div className="overflow-hidden rounded-lg">
        <img
          className="max-w-80 max-h-80 flex-auto rounded-lg h-auto"
          src={thumbnailSrc}
          alt={thumbnailAlt}
        />
      </div>
      <h3 className="pt-5 text-[14px] font-normal text-white block text-3xl">
        {heading}
      </h3>
      <p className=" justify-center text-sm text-white cursor-pointer duration-300 transition  mt-2">
        {description}
      </p>
    </div>
  );
}



function Card3Presentation() {
  return (
    <div className="w-150 grid gap-0 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:p-8">
      <Card3
        className="bg-[#000000]"
        heading="App Development"
        description="Our talented team specializes in creating consistent cross-platform applications for iOS and Android, leveraging the strengths of Flutter and Swift. With a strong focus on delivering superior user experiences and intuitive design interfaces, their expertise ensures exceptional quality throughout the process."
        thumbnailSrc={photo1}
      />
      <Card3
        className="bg-[#000000]"
        heading="Web Development"
        description="Welcome to the dynamic realm of the web development domain, where contemporary design and robust backend systems harmoniously come together. With the utilization of cutting-edge frameworks and tools, our skilled team masterfully composes design and functionality. "
        thumbnailSrc={photo2}
      />
      <Card3
        className="bg-[#000000]"
        heading="Machine Learning"
        description="Get ready to plunge into the fascinating field of machine learning, where advanced algorithms take the center stage! This domain places a strong emphasis on analyzing complex data and deriving valuable insights. "
        thumbnailSrc={photo3}
      />
    </div>
  );
}

export default Card3Presentation;
