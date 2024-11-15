import { packages } from "../../../assets/Data/hiking";

import "./Hiking.css";
import Card from "../../../Components/Card/Card";

const Hiking = () => {
  return (
    <div className="hiking-container">
      <h1>Hiking</h1>
      <div className="hiking-cards">
        {packages.map((pkg) => (
          <Card key={pkg.id} pkg={pkg} />
        ))}
      </div>
    </div>
  );
};

export default Hiking;
