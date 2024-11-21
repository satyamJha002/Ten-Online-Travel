import React from 'react'
import "./Sikkim.css";
import { tourssightPackages } from '../../../assets/Data/constantsikkim';
import Card from '../../../Components/Card/Card';

const Sikkim = () => {
  return (
    <div className='sikkim'>
      <div className='sikkim-div'>
        <h1 className='sikkim-heading'>Sikkim</h1>
        <p className='sikkim-content'>
        Experience the breathtaking sunrise over Khangchendzonga, the world’s third-highest mountain, with Sikkim holiday packages. Sikkim's charm lies in its diverse attractions, including serene Buddhist monasteries, thrilling trekking trails, majestic glaciers and glacier lakes, snow-covered peaks, and enchanting colonial-era architecture, making it a must-visit destination!</p>
      </div>


      <div className='sightseeing-sikkim-div'>
        <h2 className="sightseeing-sikkim-title"><span>Sightseeing</span></h2>
      </div>

      {/* card */}
      <div className="SikkimContainer">
        {tourssightPackages.map((pkg) => (
          <Card key={pkg.id} pkg={pkg} />
        ))}
      </div>
    </div>
  )
}

export default Sikkim;
