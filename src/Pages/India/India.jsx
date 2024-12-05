import React from 'react'
import "./india.css"
import { images } from '../../assets/Data/india'
import { useNavigate } from 'react-router-dom'

const India = () => {
  const navigate = useNavigate();
  const handleViewDeatils = (path) => {
    navigate(path)
  }

  return (
    <div className='india-main-container p-20'>
      <div className='india-img'>
        <img src='https://150429065.v2.pressablecdn.com/wp-content/uploads/2011/01/Mumbai-India-2048x1365.webp' />
      </div>

      <div className='india-description mt-9 mb-9'>
        <p>India is a country of diverse landscapes, cultures, and experiences, making it a fascinating destination for travelers. In the north, visitors can explore the bustling capital of Delhi, with its iconic landmarks such as the Red Fort and India Gate, or journey to Agra to witness the timeless beauty of the Taj Mahal. Rajasthan enchants with its royal heritage, offering palaces and forts in cities like Jaipur, Udaipur, and Jodhpur.</p>
        <p>In the south, Kerala is known for its serene backwaters, lush green hill stations like Munnar, and tranquil houseboat experiences in Alleppey.</p>
        <p>The best time to visit India depends on the region. Winter, from October to March, is ideal for most areas, while summer months are perfect for exploring cooler hill stations. </p>
      </div>

      <div className='india-container'>

        {images.map((item) => (
          <div key={item.id} className="india-image-container">
            <img src={item.images} alt={`Tour image ${item.id}`} className="tour-image" />
            <div className="india-card-body d-flex justify-content-center">
              <h5 className="india-card-title">{item.name}</h5>
              <div className='caption'>
                <button className='button-view' onClick={() => handleViewDeatils(item.path)}>View All</button>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>

  )
}

export default India;
