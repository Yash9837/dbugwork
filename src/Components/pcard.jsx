import React, { useState } from 'react';
 

function Card3({
    heading,
    description,
    thumbnailSrc,
    thumbnailAlt = "Thumbnail",
    className,
  }) {
    return (
      <div className={`w-72 h-auto border border-solid border-white py-2 px-0 flex-auto rounded-3xl p-8  mx-10 sm:mx-10  sm:justify-center `}>
        <div className="overflow-hidden rounded-lg h-64  flex items-center justify-center">
          <img
            className=" max-w-full max-h-full  rounded-lg "
            src={thumbnailSrc}
            alt={thumbnailAlt}
          />
        </div >
        <h3 className="pt-5 p-4 text-white text-2xl ">
          {heading}
        </h3>
        <p className=" p-4 cursor-pointer duration-300 transition text-[#CDCDCD] font-Poppins text-base font-semibold  mt-2">
          {description}
        </p>
      </div>
    );
  }

const Pcard = () => {
  const [currentSet, setCurrentSet] = useState(0);
   
  const cardSets = [
    [{
      heading : `App Development`,
      thumbnailSrc : `/images/pic1.png`,
      description : `Our talented team specializes in creating consistent cross-platform applications for iOS and Android, leveraging the strengths of Flutter and Swift. With a strong focus on delivering superior user experiences and intuitive design interfaces, their expertise ensures exceptional quality throughout the process.`
    },
    {
      heading : `Web Development`,
      thumbnailSrc : `/images/pic2.png`,
      description : `Welcome to the dynamic realm of the web development domain, where contemporary design and robust backend systems harmoniously come together. With the utilization of cutting-edge frameworks and tools, our skilled team masterfully composes design and functionality. `
    },
    {
      heading : `Machine Learning`,
      thumbnailSrc : `/images/pic3.png`,
      description : `Get ready to plunge into the fascinating field of machine learning, where advanced algorithms take the center stage! This domain places a strong emphasis on analyzing complex data and deriving valuable insights.` 
    }],
    [
    {
      heading : `USER INTERFACE AND USER EXPERIENCE`,
      thumbnailSrc : `/images/pic4.png`,
      description : `Our talented team specializes in creating consistent cross-platform applications for iOS and Android, leveraging the strengths of Flutter and Swift. With a strong focus on delivering superior user experiences and intuitive design interfaces, their expertise ensures exceptional quality throughout the process.`
    },
    {
      heading : `VFX AND GFX`,
      thumbnailSrc : `/images/pic5.png`,
      description : `Welcome to the dynamic realm of the web development domain, where contemporary design and robust backend systems harmoniously come together. With the utilization of cutting-edge frameworks and tools, our skilled team masterfully composes design and functionality. `
    },
    {
      heading : `CONTENT WRITING`,
      thumbnailSrc : `/images/pic6.png`,
      description : `Get ready to plunge into the fascinating field of machine learning, where advanced algorithms take the center stage! This domain places a strong emphasis on analyzing complex data and deriving valuable insights. `
    },],
    [
    {
      heading : `SPONSORSHIP AND MARKETING`,
      thumbnailSrc : `/images/pic7.png`,
      description : `Our talented team specializes in creating consistent cross-platform applications for iOS and Android, leveraging the strengths of Flutter and Swift. With a strong focus on delivering superior user experiences and intuitive design interfaces, their expertise ensures exceptional quality throughout the process.`
    }, 
    {
      heading : `PUBLIC REALTION`,
      thumbnailSrc : `/images/pic8.png`,
      description : `Welcome to the dynamic realm of the web development domain, where contemporary design and robust backend systems harmoniously come together. With the utilization of cutting-edge frameworks and tools, our skilled team masterfully composes design and functionality. `
    },
    {
      heading : `EVENTS`,
      thumbnailSrc : `/images/pic9.png`,
      description : `Get ready to plunge into the fascinating field of machine learning, where advanced algorithms take the center stage! This domain places a strong emphasis on analyzing complex data and deriving valuable insights. `
    }],
  ]

  const handleSetChange = (setIndex) => {
    setCurrentSet(setIndex);
  };

  return (
    <div className=''>

       <div className=" text-white/65 ml-[525px] flex  justify-center items-center rounded-md bg-gray-300 bg-opacity-20 max-w-[400px] my-2  ">
        <button onClick={() => handleSetChange(0)} className=' mx-2 py-1 cursor-pointer sm:basis-1/3'>Technical</button>
        <button onClick={() => handleSetChange(1)} className=' py-1 mx-2 cursor-pointer sm:basis-1/3'>Creatives</button>
        <button onClick={() => handleSetChange(2)} className=' py-1 mx-2 cursor-pointer sm:basis-1/3'>Corporate</button>
      </div>

      <div className="card-container flex flex-col  sm:flex-row sm:px-7  sm:justify-center   ">
        {cardSets[currentSet].map((card, index) => (
          <Card3 
            key={index}
            className="bg-[#000000] "
            heading={card.heading}
            description={card.description}
            thumbnailSrc={card.thumbnailSrc}
          />
        ))}
      </div>

      
    </div>
  );
};

export default Pcard;
