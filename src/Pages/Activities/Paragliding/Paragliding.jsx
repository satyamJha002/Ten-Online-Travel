import { packages } from "../../../assets/Data/paragliding";
import Card from "../../../Components/Card/Card";
import "./Paragliding.css";

const Paragliding = () => {
  return (
    <div className="paragliding-container">
      <h1>Paragliding</h1>
      <div className="paragliding-cards">
        {packages.map((pkg) => (
          <Card key={pkg.id} pkg={pkg} />
        ))}
      </div>
    </div>
  );
};

export default Paragliding;
