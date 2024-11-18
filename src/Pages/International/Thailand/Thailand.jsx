import Card from "../../../Components/Card/Card";
import { Thailand as ThailandData } from "../../../assets/Data/ThailandData";

import "./Thailand.css";

const Thailand = () => {
  return (
    <>
      <div className="thailandIntro">
        <h1>Thailand</h1>
        <div className="friAndFam">
          <h2>Friends & Family Tour</h2>
        </div>
        <div className="thailandCardsContainer">
          {ThailandData.map((pkg) => (
            <Card key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Thailand;
