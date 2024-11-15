import React from "react";
import { packages } from "../../../assets/Data/darjeeling";
import Card from "../../../Components/Card/Card";
import "./Darjeeling.css";

const Darjeeling = () => {
  return (
    <div className="darjeeling-container">
      <h1 className="text-4xl mt-5">Darjeeling</h1>

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

      <div class="flex items-center my-5">
        <div class="flex-grow border-t border-gray-300"></div>
        <span class="mx-4 text-4xl text-gray-700">Sightseeing</span>
        <div class="flex-grow border-t border-gray-300"></div>
      </div>

      <div className="darjeeling-cards">
        {packages.map((pckg) => (
          <Card key={pckg.id} pkg={pckg} />
        ))}
      </div>
    </div>
  );
};

export default Darjeeling;
