import React from 'react'
import "./Rishikesh.css";
import { rishikeshcamping, rishikeshfriend, rishikeshhiking, rishikeshrafting, rishikeshwatersports } from '../../../../../assets/Data/risihikesh';
import Card from '../../../../../Components/Card/Card';

const Rishikesh = () => {



  return (
    <div className="rishikesh">
      {/*Rishikesh */}
      <div className='rishikesh-div'>
        <h1 className='rishikesh-heading'>Rishikesh</h1>
        <p className='rishikesh-content'>
          <strong><h1>Uttarakhand Tour is incomplete if you are not going to Rishikesh. </h1></strong>
          Rishikesh is also an important pilgrimage town for Hindus. Surrounded by three districts, Tehri Garhwal, Pauri Garhwal and Haridwar, legend has it that Lord Rama imposed a penance on himself in Rishikesh for killing Ravana, the king of Lanka. From yoga and meditation to rafting and bungee jumping, there are numerous answers for what to do in Rishikesh.
          <strong>Rishikesh is a vegetarian city by law and also alcohol-free.</strong>
          </p>
      </div>
      <div className="App"> <h2>Things to Do in Rishikesh:</h2> <ul className="things-to-do"> <li>Neer Garh Waterfall</li> <li>Garud Chati Waterfall</li> <li>Phool Chatti Waterfall</li> <li className="highlight">White Water Rafting</li> <li>‘Maha Aarti’ at Triveni Ghat</li> <li>Visit Lakshman Jhula</li> <li>Visit Beatles Ashram</li> <li>Visit Cafes and interact with people all over the world</li> </ul> </div>


      <div className="camping">
                    <h2>Camping</h2>
                </div>
                <div className="camping-div">
                    {(rishikeshcamping || []).map((pkg) => (
                        <Card key={pkg.id} pkg={pkg} />
                    ))}
                </div>


                <div className="friendtour">
                    <h2>Friend &
                       Family tour
                    </h2>
                </div>
                <div className="friend-div">
                    {(rishikeshfriend || []).map((pkg) => (
                        <Card key={pkg.id} pkg={pkg} />
                    ))}
                </div>


                <div className="hiking">
                    <h2>Hiking</h2>
                </div>
                <div className="hiking-div">
                    {(rishikeshhiking || []).map((pkg) => (
                        <Card key={pkg.id} pkg={pkg} />
                    ))}
                </div>


                <div className="rafting">
                    <h2>River Rafting</h2>
                </div>
                <div className="rafting-div">
                    {(rishikeshrafting || []).map((pkg) => (
                        <Card key={pkg.id} pkg={pkg} />
                    ))}
                </div>   


                <div className="sports">
                    <h2>WaterSports</h2>
                </div>
                <div className="sports-div">
                    {(rishikeshwatersports || []).map((pkg) => (
                        <Card key={pkg.id} pkg={pkg} />
                    ))}
                </div>     





    </div>
  )
}

export default Rishikesh;
