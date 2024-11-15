import React from 'react'
import "./Sikkim.css";
import { tourssightPackages } from '../../../assets/Data/constantsikkim';
import Card from '../../../Components/Card/Card';

const Sikkim = () => {
  return (
    <div className='sikkim'>
      <div className='sikkim-div'>
        <h1 className='sikkim-heading'>Sikkim</h1>
        <p className='sikkim-content'>Witness the spectacular dawn on the world’s third-highest mountain, Khangchendzonga with Sikkim holiday packages. The various aspects of Sikkim are like Buddhist monasteries, trekking trails, glaciers and glacier lakes, the snow-clad peaks, and the colonial-era architecture, make them hard-to-miss destinations!</p>
      </div>


      <div className='sightseeing-sikkim-div'>
        <h2 className="sightseeing-title"><span>Sightseeing</span></h2>
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
