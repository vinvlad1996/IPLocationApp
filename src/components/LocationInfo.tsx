import React from 'react';
import styled from 'styled-components';

const InfoContainer = styled.div`
  margin: 0 auto 20px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1000px;
  gap: 10px;

  @media (max-width: 988px) {
    flex-direction: column;
  }
`;

const InfoItem = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  background-color: #88d294;
  padding: 10px;
  min-width: 200px;
  border-radius: 10px;
`;

const ItemTitle = styled.div`
  font-weight: bold;
`;

type LocationInfoProps = {
  ip: string;
  isp: string;
  address: string;
  timezone: string;
};

const LocationInfo: React.FC<LocationInfoProps> = ({ ip, isp, address, timezone }) => (
  <InfoContainer>
    <InfoItem>
      <ItemTitle><span>IP: </span></ItemTitle>
      {ip}
    </InfoItem>
    <InfoItem>
      <ItemTitle><span>ISP: </span></ItemTitle>
      {isp}
    </InfoItem>
    <InfoItem>
      <ItemTitle><span>Address: </span></ItemTitle>
      {address}
    </InfoItem>
    <InfoItem>
      <ItemTitle><span>Timezone: </span></ItemTitle>
      {timezone}
    </InfoItem>
  </InfoContainer>
);

export default LocationInfo;
