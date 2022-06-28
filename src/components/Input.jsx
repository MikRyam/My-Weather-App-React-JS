import React from 'react'
import "../styles/Input.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


const Input = () => {
  return (
    <div className="input">
      <InputGroup className="mb-3 search">
        <Form.Control
          className="search-box"
          placeholder="Search for the city..."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button className="search-button" variant="outline-secondary" id="button-addon2">
          Search
        </Button>
      </InputGroup>
      <Button className="geo-button" variant="link" size="lg">
          Geo
      </Button>

    </div>
  );
};

export default Input;