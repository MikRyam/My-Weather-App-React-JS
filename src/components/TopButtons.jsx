import React from 'react'
import "../styles/TopButtons.css";
import Button from 'react-bootstrap/Button';


const TopButtons = ({ setQuery }) => {
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
    {
      id: 7,
      title: "Helsinki",
    },
    {
      id: 8,
      title: "Stockholm",
    },
    {
      id: 9,
      title: "Oslo",
    },
    {
      id: 10,
      title: "Copenhagen",
    },
    {
      id: 11,
      title: "Reykjavik",
    },
    {
      id: 12,
      title: "Toronto",
    },
    {
      id: 13,
      title: "Beijing",
    },
    {
      id: 14,
      title: "New Delhi",
    },
    {
      id: 15,
      title: "Dubai",
    },
    {
      id: 16,
      title: "Ankara",
    },
    {
      id: 17,
      title: "Cairo",
    },
    {
      id: 18,
      title: "Kiev",
    },
    {
      id: 19,
      title: "Warsaw",
    },
    {
      id: 20,
      title: "Vienna",
    },
    {
      id: 21,
      title: "Prague",
    },
    {
      id: 22,
      title: "Miami",
    },
    {
      id: 23,
      title: "Texas",
    },
    {
      id: 24,
      title: "Los Angeles",
    },
    {
      id: 25,
      title: "Sydney",
    },
  ];
  return (
    <div className="top-buttons-container">
      {cities.map((city) => (
        <Button 
          key={city.id} 
          variant="link" 
          className="top-buttons"
          // size="lg"   
          onClick={() => setQuery({ q: city.title })}
          >
            {city.title}
        </Button>        
      ))}

    </div>
  )
}

export default TopButtons;