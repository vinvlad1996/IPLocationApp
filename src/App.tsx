import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Map from './components/Map';
import LocationForm from './components/LocationForm';
import LocationInfo from './components/LocationInfo';

const AppContainerMain = styled.div`
  background-image: url('map-background.png');
  background-size: cover;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  font-family: 'RobotoFont', sans-serif;
  color: #ffffff;
  margin: 0 auto;
  padding: 20px 0;
  text-align: center;
`;

const Title = styled.div`
  font-family: 'AudiowideFont', sans-serif;
`;

const App: React.FC = () => {
  const [address, setAddress] = useState('');
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [isp, setISP] = useState('');
  const [timezone, setTimezone] = useState('');
  const [ip, setIP] = useState('');

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await axios.get('https://ipapi.co/json/');
        const data = response.data;
        const address = `${data.city}, ${data.region}, ${data.country_name}`;
        setAddress(address);
        setLocation({ lat: parseFloat(data.latitude), lng: parseFloat(data.longitude) });
        setISP(data.org);
        setTimezone(data.timezone);
        setIP(data.ip);
      } catch (error) {
        console.log('Error fetching location:', error);
      }
    };

    fetchLocation();
  }, []);

  const handleFormSubmit = async (ip: string) => {
    try {
      const response = await axios.get(`http://ip-api.com/json/${ip}`);
      const data = response.data;
      const address = `${data.city}, ${data.regionName}, ${data.country}`;
      setAddress(address);
      setLocation({ lat: data.lat, lng: data.lon });
      setISP(data.isp);
      setTimezone(data.timezone);
      setIP(data.query);
    } catch (error) {
      console.log('Error fetching location:', error);
    }
  };

  return (
    <AppContainerMain>
      <AppContainer>
        <Title><h1>IP Location App</h1></Title>
        <LocationForm onSubmit={handleFormSubmit} />
        <LocationInfo ip={ip} isp={isp} address={address} timezone={timezone} />
        <Map location={location} />
      </AppContainer>
    </AppContainerMain>
  );
};

export default App;
