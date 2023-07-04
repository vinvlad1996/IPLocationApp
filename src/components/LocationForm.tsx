import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  @media (max-width: 568px) {
    flex-direction: column;
    padding: 0 20px;
    row-gap: 20px;
    align-items: center;
  }
`;

const Input = styled.input`
  padding: 10px;
  border: 2px solid #888;
  border-radius: 5px;
  outline: none;
  min-width: 300px;

  @media (max-width: 568px) {
    width: 100%;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-left: 10px;
  background-color: #888;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #616161;
    transition: 0.5s
  }

  @media (max-width: 568px) {
    width: 100%;
    min-height: 40px;
  }
`;

type LocationFormProps = {
  onSubmit: (ip: string) => void;
};

const LocationForm: React.FC<LocationFormProps> = ({ onSubmit }) => {
  const [ip, setIP] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIP(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(ip);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormContainer>
        <Input type="text" placeholder="Enter IP address" value={ip} onChange={handleInputChange} />
        <Button type="submit">Submit</Button>
      </FormContainer>
    </form>
  );
};

export default LocationForm;
