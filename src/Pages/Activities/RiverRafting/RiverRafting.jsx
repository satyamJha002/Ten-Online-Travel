import { packages } from "../../../assets/Data/RiverRafting";
import "./RiverRafting.css";
import Card from "../../../Components/Card/Card";

const RiverRafting = () => {
  return (
    <div className="riverrafting-container">
      <h1>River Rafting</h1>
      <div className="riverrafting-cards">
        {packages.map((pkg) => (
          <Card key={pkg.id} pkg={pkg} />
        ))}
      </div>
    </div>
  );
};

export default RiverRafting;
