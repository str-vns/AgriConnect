import React, { useState, useEffect } from "react";

function Test() {
    const [location, setLocation] = useState(null);

    useEffect(() => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          position => {
            setLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            });
          },
          error => {
            console.error("Error getting geolocation:", error);
            // Handle the error
          }
        );
      } else {
        console.log("Geolocation is not supported by this browser.");
        // Handle the situation where the browser doesn't support geolocation
      }
    }, []); // Empty dependency array to ensure this effect runs only once
  
  return (
    <div>
    {location ? (
      <div>
        Latitude: {location.latitude}, Longitude: {location.longitude}
      </div>
    ) : (
      <div>Loading...</div>
    )}
  </div>

  )
}

export default Test