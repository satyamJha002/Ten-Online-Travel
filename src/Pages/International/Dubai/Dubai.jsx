import "./dubai.css";
import Card from "../../../Components/Card/Card";
import { dubai } from "../../../assets/Data/dubai";

const Dubai = () => {
  return (
    <>
      <div className="dubaiIntro">
        <h1>Dubai</h1>
        <div className="dubaiInfo">
          <p>
            A city of many faces, Dubai is one of the most popular tourist
            destinations in the world. Home to the tallest tower in the world,
            the Burj Khalifa, this global city is known for its lavish
            architecture, incredible skylines and a plethora of tourist
            attractions that break records to be the tallest, longest and
            biggest. Dubai has abundant opportunities when it comes to adventure
            activities like Desert Safaris through golden Arabian Dunes,
            Skydiving over the beautiful Palm Islands, Reef and wreck diving,
            kite surfing, wakeboarding, etc.
          </p>
          <br />
          <p>
            Flaunting its glittering infrastructure amid the glorious Arabian
            desert, the city of Dubai was once known to be a barren land. Today,
            this man-made miracle is filled with shimmering skyscrapers, fancy
            hotels, shopping malls and restaurants. Burj Khalifa – the tallest
            manmade building, Dubai Fountain with jets and lights choreographed
            to music, Atlantis, the Palm and an aquarium resort are among the
            top tourist destinations in Dubai. With the biggest population of
            all the seven emirates and the second largest in size, Dubai will
            overwhelm you with its amalgamation of futuristic marvel and ancient
            Arabian traditions.
          </p>
        </div>

        <div className="friAndFam">
          <h2>Friends & Family Tour</h2>
        </div>
        <div className="DubaiCardsContainer">
          {dubai.map((pkg) => (
            <Card key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Dubai;
