import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Ravenous</h1>
      <SearchBar />
      <BusinessList businessListPropsObject={createBusinessListPropsObject()} />
    </div>
  );
}

export default App;

function SearchBar() {
  return (
    <div className="SearchBar">
      <label for="searchTerms">Search for:&nbsp;</label>
      <input name="searchTerms" />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <label for="location">Location:&nbsp;</label>
      <input name="location" />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button className="btn btn-primary">Search</button>
    </div>
  );

  // TODO: Sorting options for:
  // Best Match
  // Highest Rated
  // Most Reviewed
}

function Business({business}) { // image, name, address, city, state, zipcode, category, rating, review_count) {
  return (
    <div>
      <img src={business.imageSrc} style={{'width': '150px'}} />
      <p>Name: {business.name}</p>
      <p>Address: {business.address}</p>
    </div>
  );
}

function BusinessList(props) {
  const businessesArray = props.businessListPropsObject.businessesArray;

  return (
    <div class="BusinessListingsPanel">
      <div class="container">
        <div class="row">
          {businessesArray.map((b, index) => 
            (
              <div class="span4">
                <Business business={b} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );

  // <li key={index}>
}

function createBusinessListPropsObject() {
  let list = [];

  for (let x = 0; x < 10; x++) {
    const aBusiness = {
      imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
      name: 'Pizzeria ' + (x + 1),
      address: '1010 Paddington Way',
      city: 'Flavortown',
      state: 'NY',
      zipCode: '10101',
      category: 'Italian',
      rating: 4.5,
      reviewCount: 90
    }

    list.push(aBusiness);
  }

  return {businessesArray: list};
}

const mySampleBusiness = {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}
