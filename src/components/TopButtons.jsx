import React from 'react'
import "../styles/TopButtons.css";
import Button from 'react-bootstrap/Button';


const TopButtons = () => {
  const cities = [
    {
      id: 1,
      title: "Tokyo",
    },
    {
      id: 2,
      title: "Moscow",
    },
    {
      id: 3,
      title: "Berlin",
    },
    {
      id: 4,
      title: "Paris",
    },
    {
      id: 5,
      title: "London",
    },
    {
      id: 6,
      title: "New York",
    },
  ];
  return (
    <div className="top-buttons">
      {cities.map((city) => (
        <Button 
          key={city.id} 
          variant="link" 
          className="top-buttons"
          // size="lg"   
          // onClick={() => setQuery({ q: city.title })}
          >
            {city.title}
        </Button>        
      ))}

    </div>
  )
}

export default TopButtons;