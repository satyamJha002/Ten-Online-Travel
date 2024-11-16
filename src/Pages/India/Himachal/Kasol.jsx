import { packages } from "../../../assets/Data/kasol";
import Card from "../../../Components/Card/Card";
import "./Kasol.css";

const Kasol = () => {
  return (
    <div className="kasol-container">
      <h1>Kasol</h1>
      <div className="kasol-hiking">
      <h2>Hiking</h2>
    </div>
      <div className="kasol-cards">
        {packages.map((pkg) => (
          <Card key={pkg.id} pkg={pkg} />
        ))}
      </div>
    </div>
  );
};

export default Kasol;
