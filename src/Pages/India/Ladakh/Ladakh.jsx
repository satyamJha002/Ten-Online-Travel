import React from "react";
import {
  ladakhFamilyTrips,
  ladakhOtherTrip,
  thingsTodoInLadakh,
} from "../../../assets/Data/data";
import { famousLakes } from "../../../assets/Data/data";
import Card from "../../../Components/Card/Card";

const Ladakh = () => {
  const listPlaces = [
    "Leh",
    "Drass",
    "Kargil",
    "Nubra Valley",
    "Lamayuru",
    "Stok Kangari",
    "Suru Valley",
    "Shyok Valley",
    "Sarchu",
    "Keylong",
    "Zanskar",
    "Padum",
    "Phugthal",
    "Jispa",
    "Hunder",
    "Changthang",
    "Diskit",
    "Panamik",
    "Turtuk",
  ];
  const listMonasteries = [
    "Hemis Monastery",
    "Karma Dupgyud Choeling Monastery",
    "Matho Monastery",
    "Rangdum Gompa",
    "Lamayuru Monastery",
    "Samstanling Monastery",
    "Phugtal Monastery",
    "Alchi Monastery",
    "Diskit Monastery",
    "Spituk Gompa",
    "Likir Gompa",
    "Thiksey Gompa",
    "Shey Monastery",
    "Sankar Monastery",
    "Wanla Gompa",
    "Phyang Gompa",
    "Stakna Monastery",
    "Zongkhul Monastery",
  ];

  const listOfMountains = [
    "Khardung La",
    "Chang La",
    "Bara-lacha La",
    "Taglang La",
    "Fotu La",
    "Lachulung La",
    "Namik La",
    "Zoji La",
    "Umling La Pass",
  ];

  return (
    <div className="px-3">
      <div className="relative inline-block m-2">
        <span className="text-4xl mb-2">Ladakh</span>
        {/* <span class="absolute left-0 bottom-0 w-10 h-1 bg-green-500"></span> */}
      </div>

      <div className="">
        <p className="mt-2 px-2 text-gray-700 leading-tight sm:leading-snug">
          Ladakh, <strong>India's dramatic crown, entices adventurers</strong>{" "}
          with its barren beauty, snow-capped peaks, azure skies, and vibrant
          culture. Since opening to tourists in the 1970s, it has enchanted
          visitors with serene
          <strong>
            Pangong Lake, Tibetan monasteries, trekking trails, and rugged
            terrain.
          </strong>
          Explore pristine lakes, admire majestic mountains, and embrace
          Ladakh's raw nature and simple lifestyle with curated holiday
          packages. Before you visit this land of monasteries and resilient
          people, acclimatization to the high altitude is essential.{" "}
          <strong>
            Here’s a comprehensive guide to help you plan your Ladakh adventure
          </strong>
          .
        </p>
        <p className="mt-2 px-2 text-gray-700 leading-7 sm:leading-snug">
          Be a part of an unforgettable travel story with us and relish our
          legacy to travel, explore and celebrate life.
        </p>
      </div>

      <div className="mx-2 my-3">
        <h3 className="text-xl font-semibold text-gray-600 ">
          Best Places to Visit in Ladakh
        </h3>
        <ul className="mx-4 list-disc marker:text-gray-600 space-y-2">
          {listPlaces.map((item) => (
            <li className="text-green-500">{item}</li>
          ))}
        </ul>
      </div>

      <div className="">
        <div className="my-4">
          <span className="text-2xl font-semibold text-gray-600">
            <u className="w-5 text-gray-600">Things to do in Ladakh</u>
          </span>{" "}
          <span className="text-2xl font-semibold text-gray-600">|</span>{" "}
          <span className="text-2xl font-semibold text-gray-600">
            <u className="w-5 text-gray-600">Attraction in Ladakh</u>
          </span>
        </div>
        {thingsTodoInLadakh.map((list, index) => (
          <div key={index} className="">
            <div className="mx-2 mb-9">
              <p className="text-xl font-semibold mt-4">{list.placeName}</p>
              <p>{list.description}</p>

              <ul className="list-disc mx-4">
                <li className="text-md font-semibold text-gray-600">
                  Location:{" "}
                  <span className="font-normal">{list.description}</span>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div>
        <span className="text-2xl font-semibold text-gray-600">
          <u className="w-5 text-gray-600">Famous Lakes in Leh Ladakh</u>
        </span>{" "}
        {famousLakes.map((item, index) => (
          <div key={index}>
            <div className="mx-2 mb-9">
              <p className="text-xl font-semibold mt-4">{item.lakesName}</p>
              <p className="">{item.description}</p>

              <div>
                <p className="font-semibold text-gray-600">
                  Attraction of {item.lakesName}:
                </p>
                <ul className="mx-4">
                  {item.attraction.length === 1
                    ? item.attraction.map((list) => (
                        <li className="text-md font-semibold text-gray-600">
                          <span className="font-normal">{list}</span>
                        </li>
                      ))
                    : item.attraction.map((list) => (
                        <li className="text-md list-disc font-semibold text-gray-600">
                          <span className="font-normal">{list}</span>
                        </li>
                      ))}
                </ul>
              </div>
              <div className="my-3">
                <p className="font-semibold">
                  Best time to visit {item.lakesName}:{" "}
                  <span className="text-[1.1rem] font-normal">
                    {item.timeVisit}
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="my-3">
        <span className="text-2xl m-2  font-semibold text-gray-600">
          <u className="w-5 text-gray-600">List of Monasteries in Leh ladakh</u>
        </span>{" "}
        <ul className="mx-4 my-3 list-disc marker:text-gray-600 space-y-2">
          {listMonasteries.map((item, index) => (
            <li className="text-md text-gray-500" key={index}>
              {item}
            </li>
          ))}
        </ul>
        <div className="my-4">
          <span className="text-xl font-semibold text-gray-600">
            List of popular Mountain Passes in Leh ladakh
          </span>
          <ul className="mx-4 my-4 list-disc marker:text-gray-600 space-y-2">
            {listOfMountains.map((item, index) => (
              <li className="text-md text-gray-500" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 px-2">
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border  border-gray-300 text-left text-sm lg:text-base">
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b font-semibold border-gray-300">
                  Union Territory of Ladakh
                </td>
                <td className="py-2 px-4 border-b border-gray-300">
                  Leh & Kargil Districts
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b font-semibold border-gray-300">
                  Languages
                </td>
                <td className="py-2 px-4 border-b border-gray-300">
                  Ladakhi, Tibetan, Urdu, Balti, Hindi, English
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b font-semibold border-gray-300">
                  Best Season
                </td>
                <td className="py-2 px-4 border-b border-gray-300">
                  Summers – June to September
                  <br />
                  Winters – Oct to March
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b font-semibold border-gray-300">
                  Weather
                </td>
                <td className="py-2 px-4 border-b border-gray-300">
                  Summer 8°C – 25°C
                  <br />
                  Winter -5°C to -20°C
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b font-semibold border-gray-300">
                  Altitude
                </td>
                <td className="py-2 px-4 border-b border-gray-300">3500 m</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b font-semibold border-gray-300">
                  Srinagar – Leh – Manali Route
                </td>
                <td className="py-2 px-4 border-b border-gray-300">
                  Srinagar – Sonmarg – Kargil – Leh – Nubra – Pangong – Sarchu –
                  Jispa – Manali – Delhi
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b font-semibold border-gray-300">
                  Manali – Leh – Manali Route
                </td>
                <td className="py-2 px-4 border-b border-gray-300">
                  Manali – Jispa – Sarchu – Leh – Khardung La – Nubra Valley –
                  Pangong Lake – Manali
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex items-center my-8">
        <div className="flex-grow border-t border-gray-700"></div>
        <span className="mx-4 text-2xl md:text-3xl sm:text-xl text-gray-700">
          Friends & Family Tour
        </span>
        <div className="flex-grow border-t border-gray-700"></div>
      </div>

      <div className="flex flex-wrap justify-between gap-4 mt-8 mx-auto px-0">
        {ladakhFamilyTrips.map((pckg) => (
          <Card key={pckg.id} pkg={pckg} />
        ))}
      </div>

      <div className="flex items-center my-8">
        <div className="flex-grow border-t border-gray-700"></div>
        <span className="mx-4 text-2xl md:text-3xl sm:text-xl text-gray-700">
          The Other Trips
        </span>
        <div className="flex-grow border-t border-gray-700"></div>
      </div>

      <div className="flex flex-wrap justify-between gap-4 mt-8 mx-auto px-0">
        {ladakhOtherTrip.map((pckg) => (
          <Card key={pckg.id} pkg={pckg} />
        ))}
      </div>
    </div>
  );
};

export default Ladakh;
