import React from 'react';
import PropTypes from "prop-types";

const foodILike = [
  {
    id:1,
    name: 'Kimchi',
    image: 'https://kelliesfoodtoglow.com/wp-content/uploads/2016/10/kimchi1.jpg',
    rating: 5.0
  },
  {
    id:2,
    name: 'kimbop',
    image: 'https://chefjulieyoon.com/wp-content/uploads/2011/12/Kimbop-4-1.jpg?x80339',
    rating: 4.8
  },
  {
    id:3,
    name: 'bibimbop',
    image: 'https://www.escoffier.edu/wp-content/uploads/2016/06/ThinkstockPhotos-532125694.jpg',
    rating: 4.7
  }
];

const Food = ({name, picture, rating}) => {
  return (
    <div>
      <h1>I like {name}</h1>
      <h3>{rating}/5.0</h3>
      
      <img src = {picture} alt = {name} />
    </div>
  );
};

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div>
      <h1>Hello~~!!!</h1>
      {foodILike.map(dish => (
        <Food key={dish.id} name = {dish.name} picture = {dish.image} rating={dish.rating}/>
      ))}
    </div>
  );
}

export default App;
 