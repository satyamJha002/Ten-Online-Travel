import React from 'react'
import "./Goa.css";
import { tourGoaPackages, tourotherPackages } from '../../../assets/Data/constantgoa';
import Card from '../../../Components/Card/Card';

const Goa = () => {
  return (
    <div className='goa'>
      <div className='goa-div'>
        <h1 className='goa-heading'>Goa</h1>
        <p className='goa-content'>Goa is a favored tourist destination for people from around the world. With its vast stretches of silvery beaches caressed by the sparkling blue Arabian Sea, this city offers its visitors a medley of old-world charm and modern sophistication. The hidden coves of Goa offer an unexplored territory for the adventurer in you. Despite being the smallest state in India, Goa boasts a quality of life that is ranked No. 1 in the country. Goa is home to two World Heritage sights, namely the Bom Jesus Basilica and the churches and convents of Old Goa. The city has a very vibrant nightlife, ranked 6th in the world. Goa flaunts its Portuguese heritage in the many churches, temples, and mansions spread across the city. The Naval Aviation Museum, Fort Aguada, and the Wax Museum, showcasing the history, heritage, and culture of India, are a few of the must-see attractions in Goa.</p>
      </div>

      <div className='Friends-div'>
        <h2 className="Friends-title"><span className='friendfamily-headng'>Friends & Family Tour</span></h2>
      </div>
      {/* card */}
      <div className="GoaContainer">
        {tourGoaPackages.map((pkg) => (
          <Card key={pkg.id} pkg={pkg} />
        ))}
      </div>


      <div className='other-div'>
        <h2 className="other-title"><span className='otherstrip-headng'>Other Trips</span></h2>
      </div>

      <div>
        <p className='othertrips-content'>These are other trips.</p>
      </div>
      <div className="GoaContainer">
        {tourotherPackages.map((pkg) => (
          <Card key={pkg.id} pkg={pkg} />
        ))}
      </div>

    </div>

  )
}

export default Goa;
