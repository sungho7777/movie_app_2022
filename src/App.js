import React from 'react';


const foodILike = [
  {
    id:1,
    name: 'Kimchi',
    image: 'https://kelliesfoodtoglow.com/wp-content/uploads/2016/10/kimchi1.jpg'
  },
  {
    id:2,
    name: 'kimbop',
    image: 'https://chefjulieyoon.com/wp-content/uploads/2011/12/Kimbop-4-1.jpg?x80339'
  },
  {
    id:3,
    name: 'bibimbop',
    image: 'https://www.escoffier.edu/wp-content/uploads/2016/06/ThinkstockPhotos-532125694.jpg'
  }
];

const Food = ({name, picture}) => {
  return (
    <div>
      <h1>I like {name}</h1>
      <img src = {picture} alt = {name} />
    </div>
  );
};

function App() {
  return (
    <div>
      <h1>Hello~~!!!</h1>
      {foodILike.map(dish => (
        <Food key={dish.id} name = {dish.name} picture = {dish.image} />
      ))}
    </div>
  );
}

export default App;
 