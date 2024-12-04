import React from 'react'
import "./india.css"
import { images } from '../../assets/Data/india'
import {  useNavigate } from 'react-router-dom'

const India = () => {
const navigate =  useNavigate ();
const handleViewDeatils = (path) =>{
  navigate(path)
}

  return (
    <div className='india-container'>
      {images.map((item) => (
        <div key={item.id} className="india-image-container">
          <img src={item.images} alt={`Tour image ${item.id}`} className="tour-image" />
          <div className="india-card-body d-flex justify-content-center">
            <h5 className="india-card-title">{item.name}</h5>
            <div className='caption'>
            <button className='button-view' onClick={() =>handleViewDeatils(item.path)}>View All</button>
          </div>
          </div>
         
        </div>
      ))}
    </div>
  )
}

export default India;
