import React, { useState } from 'react';
import "../styles/Input.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation } from "@fortawesome/free-solid-svg-icons";


const Input = ({ setQuery, units, setUnits }) => {
  const [city, setCity] = useState('');

  const handleSearchCity = (event) => {
    if (event.key === 'Enter') {
      setQuery({ q: city });
      setCity('');
    }
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        setQuery({lat, lon});
      });
    }
  };

  return (
    <div className="input">
      <InputGroup className="mb-3 search">
        <Form.Control          
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}          
          onKeyPress={handleSearchCity}
          className="search-box"
          placeholder="Search for the city..."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        {/* <Button onClick={handleSearchCity} className="search-button" variant="outline-secondary" id="Enter">
          Search
        </Button> */}
      </InputGroup>
      <Button onClick={handleLocationClick} className="geo-button" variant="link" size="lg">        
        <FontAwesomeIcon icon={faLocation} size="2x"/>
      </Button>
      

    </div>
  );
};

export default Input;