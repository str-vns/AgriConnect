import React, { useState, useEffect } from "react";
import Map, { NavigationControl, Marker} from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const miniMap = () => {
    const [location, setLocation] = useState(null);
    const [viewState, setViewState] = useState({
        longitude: 0,
        latitude: 0,
        zoom: 16
    });

    useEffect(() => {
        const watchId = navigator.geolocation.watchPosition(
            position => {
                setLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                });
                setViewState({
                    longitude: position.coords.longitude,
                    latitude: position.coords.latitude,
                    zoom: 16
                });
            },
            error => {
                console.error("Error getting geolocation:", error);
            }
        );

        return () => {
            navigator.geolocation.clearWatch(watchId);
        };
    }, []); 

    if (!location) {
        return <div>Loading...</div>; 
    }

  return (
<>
 <Map
                mapLib={maplibregl}
                viewState={viewState}
                onViewStateChange={({ viewState }) => setViewState(viewState)}
                style={{ width: "100%", height: "100%" }}
                mapStyle="https://api.maptiler.com/maps/streets-v2/style.json?key=O7BfebJywf5BGbak0iIT"
            >
                <NavigationControl position="top-left" />

                <Marker longitude={location.longitude} latitude={location.latitude}>
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
            </Map>
            
 </>
  )
}

export default miniMap