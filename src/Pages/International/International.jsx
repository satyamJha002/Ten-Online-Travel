import React, { useState } from "react"; 
import "./International.css";
import { Link, useLocation } from "react-router-dom";

const International = () => {
    const location = useLocation();
    const [locationURL] = useState(location.pathname);
    const newUrl = locationURL
        .split("")
        .map((ele) => (ele === "/" ? " > " : ele))
        .join("");
    return (
        <div className='internationalMain'>
            <p className="international-destination"> Home {newUrl}</p>
            <h1>Destination</h1>
            <div className="Main-container">
                <img src="https://b4holiday.com/wp-content/uploads/2017/11/mountain-landscape-2031539_19201-1290x540.jpg" alt="activeimg" />
                <p>Experience the thrill of adventure with our curated activity packages, featuring paragliding, river rafting, and hiking. Soar through the skies with paragliding, enjoying breathtaking views of serene landscapes, or dive into the excitement of river rafting as you tackle rapids with the guidance of experienced professionals. For those seeking to reconnect with nature, our hiking trails offer a mix of peaceful paths and challenging treks through stunning destinations.</p>
                <p>Each activity is carefully designed to ensure your safety and satisfaction, complete with personalized planning and top-notch support. Pair your adventures with our unbeatable flight and hotel deals to create the ultimate travel experience. Whether you're an adrenaline junkie or a nature lover, we have something for everyone.</p>
            </div>
            <div className='Internationalcard'>
                <div className='campingcard'>
                    <div className='campingcard-image'>
                        <img src='https://b4holiday.com/wp-content/uploads/2022/05/Lempuyang_Temple_Bali-tn-300x300.jpg' />
                        <Link to="/International/bali">
                            <button className='view-button'>View All</button>
                        </Link>
                    </div>
                    <div className="national">
                    <Link to="/International/bali"><h2>Bali</h2></Link>
                        <p>(65 trips)</p>
                    </div>

                </div>
                <div className='campingcard'>
                    <div className='campingcard-image'>
                        <img src='https://b4holiday.com/wp-content/uploads/2020/11/Burj-Khalifa-Dubai-UAE-300x405.jpg' alt='riverrafting' />
                        <Link to="/International/dubai">
                            <button className='view-button'>View All</button>
                        </Link>
                    </div>
                    <div className="national">
                    <Link to="/International/dubai"><h2>Dubai</h2></Link>
                        <p>(3 trips)</p>
                    </div>
                </div>
                <div className='campingcard'>
                    <div className='campingcard-image'>
                        <img src='https://b4holiday.com/wp-content/uploads/2021/10/Kuala-Lumpur-tour-package.jpg' />
                        <Link to="/International/malaysia">
                            <button className='view-button'>View All</button>
                        </Link>
                    </div>
                    <div className="national">
                    <Link to="/International/malaysia"><h2>Malaysia</h2></Link>
                        <p>(32 trips)</p>
                    </div>
                </div>


                <div className='campingcard'>
                    <div className='campingcard-image'>
                        <img src='https://b4holiday.com/wp-content/uploads/2017/11/maldives-1993704_19201-300x405.jpg' />
                        <Link to="/international/maldives">
                            <button className='view-button'>View All</button>
                        </Link>
                    </div>
                    <div className="national">
                        <Link to="/international/maldives"><h2>Maldives</h2></Link>
                        <p>(32 trips)</p>
                    </div>
                </div>


                <div className='campingcard'>
                    <div className='campingcard-image'>
                        <img src='https://b4holiday.com/wp-content/uploads/2021/10/Gardens-by-the-Bay3.jpg' />
                        <Link to="/international/singapore">
                            <button className='view-button'>View All</button>
                        </Link>
                    </div>
                    <div className="national">
                    <Link to="/international/singapore"><h2>Singapore</h2></Link>
                        <p>(31 trips)</p>
                    </div>
                </div>

                <div className='campingcard'>
                    <div className='campingcard-image'>
                        <img src='https://b4holiday.com/wp-content/uploads/2021/10/james_bond_island.jpg' />
                        <Link to="/international/thailand">
                            <button className='view-button'>View All</button>
                        </Link>
                    </div>
                    <div className="national">
                    <Link to="/international/thailand"><h2>Thailand</h2></Link>
                        <p>(20 trips)</p>
                    </div>
                </div>


                {/* <div className='campingcard'>
                    <div className='campingcard-image'>
                        <img src='https://png.pngtree.com/background/20230516/original/pngtree-people-hiking-to-the-top-of-a-snow-covered-mountain-picture-image_2598070.jpg' alt='riverrafting' />
                        <Link to="/international/thailand">
                            <button className='view-button'>View All</button>
                        </Link>
                    </div>
                    <div className="national">
                    <Link to="/international/thailand"><h2>Thailand</h2></Link>
                        <p>(7 trips)</p>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default International;