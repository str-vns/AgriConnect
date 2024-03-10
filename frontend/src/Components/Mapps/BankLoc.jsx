import React, { useEffect, useState } from 'react';
import Map, { NavigationControl, Marker, Popup } from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import Loader from '../Layout/Loader'
import axios from 'axios'
import { Link } from 'react-router-dom';
import "./Map.css";
import Rating from 'react-rating';

function BankLocal() {
    const [popupInfo, setPopupInfo] = useState([]);
    const [allLocation, setAllLocation] = useState([])
    const [loading, setLoading] = useState(true)
  
    const handleMarkerClick = (location) => {
      setPopupInfo([{
        _id: location._id,
        longitude: location.longitude,
        latitude: location.latitude,
        bankName: location.bankName,
        address: location.address,
        city: location.city,
        postalCode: location.postalCode,
        images: location.images,
        ratings: location.ratings
      }]);
    };
  
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
  
    const listLocation = async () => {
      try {
        const { data } = await axios.get(`http://localhost:4000/api/v1/bank/location`, config)
        setAllLocation(data.banks)
        console.log(data)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
  
    useEffect(() => {
      listLocation()
    }, [])
  
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
  
          {popupInfo.map((info, index) => (
            <Popup
              key={index}
              longitude={info.longitude}
              latitude={info.latitude}
              closeButton={true}
              closeOnClick={false}
              onClose={() => setPopupInfo([])}
              className="rounded-popup"
            >
              <div className="control-panel">
                {info.images && info.images.length > 0 && (
                  <img className="rounded p-3 w-full h-32" src={info.images[0].url} />
                )}
                <p className="text-black">Banks</p>
                <h1 className="text-black">Name: {info.bankName}</h1>
                <p className="text-black">
                  Address: {info.address}, {info.city}, {info.postalCode}
                </p>
               
                
              </div>
            </Popup>
          ))}
        </Map>
      </>
    )
}

export default BankLocal