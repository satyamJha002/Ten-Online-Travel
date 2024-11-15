import { malaysia } from "../../../assets/Data/malaysia";
import Card from "../../../Components/Card/Card";
import "./malaysia.css";
const Malaysia = () => {
  return (
    <>
      <div className="malaysiaIntro">
        <h1>Malaysia</h1>
        <div className="friAndFam">
          <h2>Friends & Family Tour</h2>
        </div>
        <div className="malaysiaCardsContainer">
          {malaysia.map((pkg) => (
            <Card key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Malaysia;
