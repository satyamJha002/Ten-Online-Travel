import React from "react";
import {
    
    travelPackage as naintal, 
} from "../../../../assets/Data/naintal";
import Card from "../../../../Components/Card/Card";
import "../Nainitaldata/Naintal";

const Nainital = () => {
    return (
        <>
            
            
       <div className='goa'>
      <div className='goa-divi'>
        <h1 className='goa-heading'>Nainital</h1>
        <p className='goa-content'> Nainital is one of the most charismatic hill stations that India harbours, and it is tucked away in the Kumaon foothills of the Himalayas at an altitude of 1,938 meters. Its enchanting panorama, sprinkled with natural resplendence in the form of varicoloured coppices and dazzling diamond-shaped lakes, has earned it the well-merited moniker of "Lake Paradise". 
        The gardenated beauty of the place beckons day-trippers, nature-seekers, and travel enthusiasts all across India. Nainital holds an inimitable charm and forms the perfect retreat from cacophony and city blues, especially for North Indian denizens. 
        Nainital is a glittering jewel in the Himalayan necklace, blessed with scenic natural splendour and varied natural resources. Nainital is popularly known as the "lake district of India" and is situated in Uttarakhand. The word Nainital means, “Naini” meaning “the eye” and “Tal” meaning “the Lake”. 
        Nainital was earlier the summer headquarters of the British. The natural beauty and the Naini Lake make it a famous tourist destination. Nainital is also an ideal destination for families, honeymooners, poets and writers, nature lovers, and adventure lovers as well.</p>
      </div>


                <div className="friAndFam">
                    <h2>Friends & Family Tour</h2>
                </div>
                <div className="maldivesCardsContainer">
                    {(naintal || []).map((pkg) => (
                        <Card key={pkg.id} pkg={pkg} />
                    ))}
                </div>
               
            </div>
        </>
    );
};

export default Nainital;