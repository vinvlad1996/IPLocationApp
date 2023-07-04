import React from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

interface MapProps {
  location: google.maps.LatLngLiteral | null;
}

const Map: React.FC<MapProps> = ({ location }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCXPjM0QzEsF6-QCwa3HP4GX8-atzpmqjw',
  });

  if (loadError) {
    return <div>Error loading map</div>;
  }

  if (!isLoaded) {
    return <div>Loading map...</div>;
  }

  const center = location ? location : { lat: 0, lng: 0 };

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
      {location && (
        <Marker position={location} icon={{ url: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png' }} />
      )}
    </GoogleMap>
  );
};

export default Map;
