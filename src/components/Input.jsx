import React, { useState } from 'react';
import "../styles/Input.css";
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Input = ({ setQuery, units, setUnits, isLoading, setIsLoading }) => {
  const [city, setCity] = useState('');
  

  const handleSearchCity = (event) => {
    if (city.trim().length !== 0) {    
      
      setQuery({ q: city });
      setCity('');
    }    
    // if (event.key === 'Enter') {
    //   setQuery({ q: city });
    //   setCity('');
    // }
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
          // onKeyPress={handleSearchCity}
          onKeyPress={event => {
            if (event.key === 'Enter') {
              handleSearchCity()
            }
          }}
          className="search-box"
          placeholder="Search for the city..."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button onClick={handleSearchCity} className="search-button" variant="outline-secondary" id="Enter">
          {isLoading ?
            <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
            /> :
            <FontAwesomeIcon icon={faMagnifyingGlass}/>
          }
        </Button>
      </InputGroup>
      <Button onClick={handleLocationClick} className="geo-button" variant="link" >        
        <FontAwesomeIcon icon={faLocation} size="2x" className="geo-icon"/>
      </Button>
      

    </div>
  );
};

export default Input;