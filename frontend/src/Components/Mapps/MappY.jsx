import React, { useEffect, useState } from 'react';
import Map, { NavigationControl, Marker, Popup } from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import Loader from '../Layout/Loader'
import axios from 'axios'
import { Link } from 'react-router-dom';

const Mappy = () => {
  const [popupInfo, setPopupInfo] = useState(null);
  const [allLocation, setAllLocation] = useState([])
  const [loading, setLoading] = useState(true)
  const handleMarkerClick = (location) => {

    setPopupInfo({
      longitude: location.farmInfo.longitude,
      latitude: location.farmInfo.latitude,
      farmName: location.farmInfo.farmName,
      address: location.farmInfo.address,
      city: location.farmInfo.city,
      postalCode: location.farmInfo.postalCode
    });
  };

  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
   const listLocation = async() => {
    try {
      const {data} = await axios.get(`http://localhost:4000/api/v1/farmer/allfarmer`, config)
     
    
      setAllLocation(data.farmers)
      console.log(allLocation[0].farmInfo.latitude)
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
  longitude={location.farmInfo.longitude} 
  latitude={location.farmInfo.latitude}  
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
 >
    <div className="control-panel">
    <h1>{popupInfo.farmName}</h1>


      <p> Address: {popupInfo.address}, {popupInfo.city}, {popupInfo.postalCode}</p>

      <p>
        Map showing top 20 most populated cities of the United States. Click on a marker to learn
        more.
      </p>
      <p>
        Data source:{' '}
        <a href="https://en.wikipedia.org/wiki/List_of_United_States_cities_by_population">
          Wikipedia
        </a>
      </p>
      <div className="source-link">
        <Link to="/farmerInfo">
        <a
          href="https://github.com/visgl/react-map-gl/tree/7.1-release/examples/controls"
          target="_new"
        >
          View Code ↗
        </a>
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