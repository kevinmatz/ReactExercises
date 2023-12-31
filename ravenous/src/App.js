import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Ravenous</h1>
      <SearchBar />
      <br/>
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

  // Function to chunk the array
  const chunkArray = (array, size) => {
    let result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  }

  // Chunk the businessesArray into groups of 3
  const chunkedBusinesses = chunkArray(businessesArray, 3);

  return (
    <div className="BusinessListingsPanel">
      <div className="container">
        {chunkedBusinesses.map((chunk, rowIndex) => (
          <div key={rowIndex} className="row">
            {chunk.map((business, index) => (
              <div key={index} className="col-md-4">
                <Business business={business} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

// <li key={index}>

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
