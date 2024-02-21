import React, { useState } from "react";
import MapGL, { NavigationControl, Marker } from 'react-map-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import maplibregl from 'maplibre-gl';

const BankMap = ({ onLocationChange }) => {
    const [viewport, setViewport] = useState({
        latitude: 14.843914030275116,
        longitude: 120.81131729963494,
        zoom: 14,
    });
    
    const [markerPosition, setMarkerPosition] = useState({
        latitude: 14.843914030275116,
        longitude: 120.81131729963494,
    });
    
    const handleMarkerDrag = (event) => {
        const { lngLat } = event;
        if (lngLat) {
            setMarkerPosition({
                latitude: lngLat.lat,
                longitude: lngLat.lng,
            });
            setViewport({
                ...viewport,
                latitude: lngLat.lat,
                longitude: lngLat.lng,
            });
            // Pass the location to the parent component
            onLocationChange({
                latitude: lngLat.lat,
                longitude: lngLat.lng
            });
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setMarkerPosition({
            ...markerPosition,
            [name]: parseFloat(value),
        });
        setViewport({
            ...viewport,
            [name]: parseFloat(value),
        });
    };
      
    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <MapGL
                mapLib={maplibregl}
                {...viewport}
                width="100%"
                height="100%"
                mapStyle={`https://api.maptiler.com/maps/streets-v2/style.json?key=O7BfebJywf5BGbak0iIT`} 
                onViewportChange={setViewport}
            >
                <div style={{ position: 'absolute', right: 10, top: 10 }}>
                    <NavigationControl />
                </div>

                <Marker
                    latitude={markerPosition.latitude}
                    longitude={markerPosition.longitude}
                    draggable
                    onDragEnd={handleMarkerDrag}
                >
                    <div style={{ color: 'red', fontSize: 24 }}>📍</div>
                </Marker>
            </MapGL>

            <div style={{ position: 'absolute', bottom: 10, left: 10 }}>
                <label>
                    Latitude:
                    <input
                        type="number"
                        name="latitude"
                        value={markerPosition.latitude}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Longitude:
                    <input
                        type="number"
                        name="longitude"
                        value={markerPosition.longitude}
                        onChange={handleInputChange}
                    />
                </label>
            </div>
        </div>
    );
};

export default BankMap;
