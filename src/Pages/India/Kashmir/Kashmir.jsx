import React from "react";
import { kashmirPackages } from "../../../assets/Data/data";
import Card from "../../../Components/Card/Card";

const Kashmir = () => {
  return (
    <div className="px-3">
      <h1 className="ext-4xl my-4 relative sikkim-heading">
        Kashmir
        <span class="absolute after:content-empty after:block after:h-[2px] after:w-[5%] after:bg-[#32b67a] after:mt-2"></span>
      </h1>
      <div className="px-2">
        <img
          src="https://b4holiday.com/wp-content/uploads/2022/02/1567063194_kashmir_web.jpg"
          alt=""
          className="relative h-[35vh] bg-cover bg-center md:h-[50vh] sm:h-[50vh] w-screen"
        />
      </div>

      <div className="mx-auto px-2  py-1">
        <div className="mt-8 text-gray-700">
          <h3 className="text-2xl font-semibold">Kashmir Tour Packages</h3>
          <p className="mt-2 ">
            Book online{" "}
            <strong>
              Kashmir Packages from Delhi, Mumbai, Bangalore, Chennai, and other
              cities
            </strong>
            . Visit famous destinations in Kashmir with our holiday packages and
            enjoy a memorable experience.
          </p>
        </div>
        <div className="mt-8 text-gray-700">
          <h3 className="text-2xl font-semibold">
            List Of Best Kashmir Tour Packages
          </h3>
          <p className="mt-2 ">
            Book the latest <strong>Cheap Kashmir Holiday Tour Packages</strong>{" "}
            check our three types of <strong>Cheap Holiday Packages</strong> for
            Families Group & Couples, you can find the perfect package and get
            the best prices & services with our company.
          </p>
          <br />
          <p className="">
            We provide <strong>Kashmir tours & travel package</strong> services
            such as budget & Luxury Hotels in Srinagar, Gulmarg, Pahalgam,
            Jammu, Cab Services & much more. want to know more about so contact
            our support & get the all information about your trip to Kashmir
          </p>
        </div>
        <div className="mt-8 text-gray-700">
          <h3 className="text-2xl font-semibold">
            Kashmir Tour Packages for Family
          </h3>
          <p className="mt-2 ">
            Are you looking for the best <strong>Holiday Package</strong> for
            your Family? If yes, then check our latest{" "}
            <strong>Holiday Packages for Family”s</strong>. Check below family
            tour Packages with full and perfect travel itineraries that we have
            customized only for you. Book these packages explore{" "}
            <strong>
              Day Tour in Sonmarg, Night Stay in Srinagar, Night Stay In Gulmarg
              and Pahalgam.
            </strong>
          </p>
        </div>
        <div className="mt-8 text-gray-700">
          <h3 className="text-2xl font-semibold">
            Kashmir Tour Package for Couple{" "}
          </h3>
          <p className="mt-2 ">
            We have special Kashmir Tour packages for Couples who have the plan
            to Make a honeymoon tour in Kashmir. Check our Special 4 packages
            and get the best Honeymoon arrangements such as Bed Decoration in a
            Houseboat, Candle Light Dinner. Take a Romantic Shikara Ride in Dal
            Lake, Srinagar.
          </p>
        </div>
        <div className="mt-8 text-gray-700">
          <h3 className="text-2xl font-semibold">
            Kashmir Tour Package for Groups
          </h3>
          <p className="mt-2">
            Book Group Tour Packages for those friends who have plan to visit
            Valley, check the list of Group Holiday Packages and choose the best
            one by road from Jammu & also by flight to Srinagar.
          </p>
        </div>
      </div>
      <div class="flex items-center my-5">
        <div class="flex-grow border-t border-gray-300"></div>
        <span class="mx-4 text-2xl md:text-3xl sm:text-xl text-gray-700">
          Friends & Family Tour
        </span>
        <div class="flex-grow border-t border-gray-300"></div>
      </div>
      <div className="flex flex-wrap gap-4 justify-evenly md:justify-start">
        {kashmirPackages.map((pckg) => (
          <Card key={pckg.id} pkg={pckg} />
        ))}
      </div>
    </div>
  );
};

export default Kashmir;
