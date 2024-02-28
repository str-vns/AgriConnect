import React, { useEffect, useState } from 'react';
import Map, { NavigationControl, Marker, Popup } from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import Loader from '../Layout/Loader'
import axios from 'axios'
import { Link } from 'react-router-dom';
import "./Map.css";
import Rating from 'react-rating';

const Mappy = () => {
  const [popupInfo, setPopupInfo] = useState(null);
  const [allLocation, setAllLocation] = useState([])
  const [loading, setLoading] = useState(true)
  const handleMarkerClick = (location) => {

    setPopupInfo({
      _id: location._id,
      longitude: location.longitude,
      latitude: location.latitude,
      farmName: location.farmName,
      address: location.address,
      city: location.city,
      postalCode: location.postalCode,
      images: location.images,
      ratings: location.ratings
    });
  };

  console.log((popupInfo?.ratings / 5) * 5)
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
   const listLocation = async() => {
    try {
      const {data} = await axios.get(`http://localhost:4000/api/v1/farmer/allfarmer`, config)
     
    
      setAllLocation(data.farmers)
      console.log(allLocation[0].latitude)
      setLoading(false)
    } catch (error) {
      console.log(error.data.message)
            
    }
   }

   useEffect(()  =>
   {
    listLocation()
   },[])
  return (
    <>
     
      <Map
        mapLib={maplibregl}
        initialViewState={{
          longitude: 120.811536,
          latitude: 14.843619,
          zoom: 14
        }}
        
        style={{ width: "100%", height: "100%" }}
        mapStyle="https://api.maptiler.com/maps/streets-v2/style.json?key=O7BfebJywf5BGbak0iIT"
      >
        <NavigationControl position="top-left" />

 
        {allLocation.map((location, index) => (
  <Marker 
  key={index}
  longitude={location.longitude} 
  latitude={location.latitude}  
  onClick={() => handleMarkerClick(location)}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="30"
      height="30"
      fill="red"
    >
      <path d="M12 2c-3.314 0-6 2.686-6 6 0 2.9 2.49 6.12 6 9.82 3.51-3.7 6-6.92 6-9.82 0-3.314-2.686-6-6-6zm0 9c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
    </svg>
  </Marker>
))}
      
 
        <Marker longitude={120.829602} latitude={14.849681}  onClick={() => handleMarkerClick(120.829602, 14.849681)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="30"
            height="30"
            fill="red"
          >
            <path d="M12 2c-3.314 0-6 2.686-6 6 0 2.9 2.49 6.12 6 9.82 3.51-3.7 6-6.92 6-9.82 0-3.314-2.686-6-6-6zm0 9c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/>
          </svg>
        </Marker>
        {popupInfo && (
  <Popup
    longitude={popupInfo.longitude}
    latitude={popupInfo.latitude}
    closeButton={true}
    closeOnClick={false}
    onClose={() => setPopupInfo(null)}
    className="rounded-popup"
  >
    <div className="control-panel">
      <img className="rounded p-3 w-full h-32" src={popupInfo.images[0].url} />
      <p className="text-black">Farmer</p>
      <h1 className="text-black">Name: {popupInfo.farmName}</h1>
      <p className="text-black">
        Address: {popupInfo.address}, {popupInfo.city}, {popupInfo.postalCode}
      </p>
      <p className="text-black">Rating: <Rating
  emptySymbol={<i className="far fa-star" style={{ color: "gray" }} />}
  fullSymbol={<i className="fas fa-star" style={{ color: "gold" }} />}
  initialRating={(popupInfo.ratings / 5) * 5} 
  readonly
/>
</p>
{/* <div className="rating-outer">
  <div className="rating-inner" style={{ width: `${(popupInfo.ratings / 5) * 100}%` }}></div>
</div> */}
      <div className="source-link p-2">
        <Link to={`/farmerInfo/${popupInfo._id}`}>
          <button className="text-center mt-2 rounded-xl border-2 border-black text-black p-2 hover:bg-black hover:text-white cursor-pointer">
            View More
          </button>
        </Link>
      </div>
    </div>
  </Popup>
)}
      </Map>
   
    </>
  );
};

export default Mappy;