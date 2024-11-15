import Card from "../../../Components/Card/Card";
import "./Hiking.css";
import { hiking } from "../../../assets/Data/hiking";
const Hiking = () => {
  return (
    <div className="hiking-container">
      <h1>hiking</h1>
      <div className="hiking-cards">
        {hiking.map((pkg) => (
          <Card key={pkg.id} pkg={pkg} />
        ))}
      </div>
    </div>
  );
};

export default Hiking;
