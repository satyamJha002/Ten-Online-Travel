import React from "react";
import {
    maldivesOtherTrips,
    maldivesWaterVilla,
    travelPackage as maldives,
} from "../../../../assets/Data/kodaikanal";
import Card from "../../../../Components/Card/Card";
import "./kodaikanal.css";


const Kodaikanal = () => {
    return (
        <>
            <div className="munnar-intro">
                <h1>Kodaikanal</h1>
                <div className="munnarInfo">

                    <p>
                        Kodaikanal is one of the most famous honeymoon destinations in India. A Lakeside resort town of Tamil Nadu, Kodaikanal has a beautiful climate, mist-covered manicured cliffs and waterfall that come together to create the ideal setting for a perfect getaway. Kodaikanal means ‘the gift of the forests’.

                        Nestled amidst the rolling slopes of the Palani Hills, Kodaikanal stands at an altitude of 7200 feet above sea level, and once you visit this hill station, you will find that every bit of what you have imagined it to be is real. Kodaikanal is a place you can go to take a break from the rigours of daily city life.
                    </p>
                </div>
                <div className="friAndFam">
                    <h2>Friends & Family Tour</h2>
                </div>
                <div className="maldivesCardsContainer">
                    {(maldives || []).map((pkg) => (
                        <Card key={pkg.id} pkg={pkg} />
                    ))}
                </div>
                <div className="Sightseeing">
                    <h2>Sightseeing</h2>
                </div>
                <div className="munnnarCardsContainer">
                    {(maldivesWaterVilla || []).map((pkg) => (
                        <Card key={pkg.id} pkg={pkg} />
                    ))}
                </div>
                <div className="Sightseeing">
                    <h2>Other Trips</h2>
                </div>
                <div className="munnerCardsContainer">
                    {(maldivesOtherTrips || []).map((pkg) => (
                        <Card key={pkg.id} pkg={pkg} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Kodaikanal;