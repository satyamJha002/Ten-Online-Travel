import React from 'react'
import "./AndamanTour.css";
import { andmatour, watertourPackages } from '../../../assets/Data/Andmatour';
import Card from '../../../Components/Card/Card';

const AndamanTour = () => {



  return (
    <div className='Andaman-tour'>
      {/*Andaman  */}
      <div className='Andaman-div'>
        <h1 className='andaman-heading'>Andaman Tour</h1>
        <p className='andaman-content'><strong>Andaman and Nicobar Islands, </strong>also known as Kalapani is one of the most beautiful places you can visit in India.<br />
          <strong>Andaman and Nicobar Islands</strong> include a whooping 572 islands in total out of which only 50 are inhabited by people whereas the rest are either too small, come<br />
          under forest reserve or are used by the Indian military as their base.<br />
          Exotic, beautiful and richly evocative of India’s colonial past, the <strong>Andaman and Nicobar Islands</strong> are growing into popular tourist destinations. The 2 groups of <br />
          islands, made up of the summits of a submerged mountain range, form India’s most remote state, located in the middle of the Bay of Bengal.<br />
          <strong>Weather</strong>
          The weather here is moderate throughout the year and does not follow the trends of India. When there is summer all over the mainland, Andamans just start out <br />
          with monsoon and therefore offer a perfect break from the harsh sun.</p>
      </div>
      <div className='list-div'>
        <strong>Here is the list of all islands in Andaman you can visit:</strong>
        <div className='list-name'>
          <ul className='no-symbol'>
            <li>Port Blair</li>
            <li>Jolly Buoy</li>
            <li>Baratang</li>
            <li>Mayabunder</li>
          </ul>
          <ul className='no-symbol'>
            <li>Swaraj Dweep (Havelock)</li>
            <li>North Bay</li>
            <li>Diglipur</li>
            <li>Cinque Island</li>
          </ul>
          <ul className='no-symbol'>
            <li>Shaheed Dweep (Neil Island)</li>
            <li>Ross Island</li>
            <li>Red Skin Island</li>
            <li>Barren Island (Active Volcano)</li>
          </ul>
        </div>
      </div>


      <div className='sightseeing-div'>
        <h2 className="sightseeing-title"><span>Sightseeing</span></h2>
      </div>
      {/* card */}




      <div className="AndamanContainer">
        {andmatour.map((pkg) => (
          <Card key={pkg.id} pkg={pkg} />
        ))}
      </div>



      <div className='Watersports-div'>
        <h2 className="Watersports-title"><span>Watersports</span></h2>
      </div>


      {/* card */}
      <div className="WaterSportContainer">
  {watertourPackages.map((pkg, index) => {
    const isLastTwo = index >= watertourPackages.length - 2;
    return (
      <Card key={pkg.id} pkg={pkg} className={isLastTwo ? 'last-company' : ''} />
    );
  })}
</div>




    </div>
  )
}

export default AndamanTour;
