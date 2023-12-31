import React, { useState } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import BusinessList from './BusinessList';
import searchBusinessesOnYelp from './utils/Yelp';



function App() {
  const [businessesList, setBusinessesList] = useState([]);

  const searchBusinesses = async (searchTerms, location, sortOption) => {
    const results = await searchBusinessesOnYelp(searchTerms, location, sortOption);
    console.log("results:");
    console.log(results);
    setBusinessesList(results);
  }

  return (
    <div className="App">
      <h1>Ravenous</h1>
      <SearchBar searchHandler={searchBusinesses} />
      <br/>
      <BusinessList businessesArray={businessesList} />
    </div>
  );
}

export default App;



// function createBusinessListPropsObject() {
//   let list = [];

//   for (let x = 0; x < 10; x++) {
//     const aBusiness = {
//       image_url: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
//       name: 'Pizzeria ' + (x + 1),
//       address: '1010 Paddington Way',
//       city: 'Flavortown',
//       state: 'NY',
//       zipCode: '10101',
//       category: 'Italian',
//       rating: 4.5,
//       reviewCount: 90
//     }

//     list.push(aBusiness);
//   }

//   return {businessesArray: list};
// }

// const mySampleBusiness = {
//   image_url: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
//   name: 'MarginOtto Pizzeria',
//   address: '1010 Paddington Way',
//   city: 'Flavortown',
//   state: 'NY',
//   zipCode: '10101',
//   category: 'Italian',
//   rating: 4.5,
//   reviewCount: 90
// }
