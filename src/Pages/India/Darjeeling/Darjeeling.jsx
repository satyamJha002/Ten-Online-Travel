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

      <div className="flex flex-wrap gap-4 md:justify-between md:m-8 sm:justify-center justify-center ">
        {darjeelingPackages.map((pckg) => (
          <Card key={pckg.id} pkg={pckg} />
        ))}
      </div>
    </div>
  );
};

export default Darjeeling;
