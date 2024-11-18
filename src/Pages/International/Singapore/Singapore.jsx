import Card from "../../../Components/Card/Card";
import { Singapore as SingaporeData } from "../../../assets/Data/SingaporeData";

import "./Singapore.css";

const Singapore = () => {
  return (
    <>
      <div className="singaporeIntro">
        <h1>Singapore</h1>
        <div className="friAndFam">
          <h2>Friends & Family Tour</h2>
        </div>
        <div className="singaporeCardsContainer">
          {SingaporeData.map((pkg) => (
            <Card key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Singapore;
