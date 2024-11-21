import React from "react";
import { darjeelingPackages } from "../../../assets/Data/data";
import Card from "../../../Components/Card/Card";

const Darjeeling = () => {
  return (
    <div className="px-3">
      <h1 className="text-4xl my-4 relative sikkim-heading">
        Darjeeling
        <span class="absolute after:content-empty after:block after:h-[2px] after:w-[5%] after:bg-[#32b67a] after:mt-2"></span>
      </h1>

      <div className="">
        <p className="mt-2 text-gray-700">
          Darjeeling, the "Queen of the Hills" in West Bengal, India, is famous
          for its stunning Himalayan views, especially of Mount Kanchenjunga,
          and its world-renowned tea. With a vibrant culture blending Tibetan,
          Nepali, and Bengali influences, Darjeeling offers unique attractions
          like the UNESCO-listed Darjeeling Himalayan Railway and the scenic
          Tiger Hill, making it a beloved destination for its natural beauty and
          colonial charm.
        </p>
      </div>

      <div className="flex items-center my-5">
        <div className="flex-grow border-t border-gray-700"></div>
        <span className="mx-4 text-2xl md:text-3xl sm:text-xl text-gray-700">
          Sightseeing
        </span>
        <div className="flex-grow border-t border-gray-700"></div>
      </div>

      {/* flex flex-wrap gap-5 ml-0 justify-center max-lg:justify-start max-lg:ml-7 max-lg:pl-5 max-md:justify-center max-md:ml-7 max-md:pl-5 max-xl:justify-start  max-2xl:justify-start max-sm:ml-0 */}
      <div className="mx-auto px-0 max-sm:px-5">
        <div className="flex gap-5 flex-wrap justify-center mx-0 max-2xl:justify-between max-2xl:mx-4 max-2xl:px-6 max-xl:justify-between max-lg:justify-between max-lg:mx-4 max-lg:px-7 max-md:justify-center max-sm:mx-0 max-sm:px-0">
          {darjeelingPackages.map((pckg) => (
            <Card key={pckg.id} className="" pkg={pckg} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Darjeeling;

//
