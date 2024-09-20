import { useSelector } from 'react-redux';
import { useState } from 'react';
import Auto from '../Auto/Auto';

const SearchLease = () => {
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [filteredCars, setFilteredCars] = useState([]);
  const auto = useSelector(state => state.auto.items);
  const models = useSelector(state => state.filtersLease.models);

  const handleMakeChange = event => {
    setSelectedMake(event.target.value);
  };
  const handlePriceChange = event => {
    setSelectedPriceRange(event.target.value);
    console.log(
      'setSelectedPriceRange(event.target.value): ' + event.target.value
    );
  };
  const handleSearch = () => {
    const filtered = auto.filter(auto => {
      const byMake = selectedMake === '' || auto.make === selectedMake;
      const byPrice =
        selectedPriceRange === '' ||
        auto.rentalPrice.slice(1) <= parseInt(selectedPriceRange);
      console.log('rentalPrice: ' + auto.rentalPrice);
      console.log('byPrice: ' + byPrice);
      return byMake && byPrice;
    });
    setFilteredCars(filtered);
  };

  return (
    <>
      <div>
        <label>
          Car brand
          <select value={selectedMake} onChange={handleMakeChange}>
            <option value="">All Makes</option>
            {models.map(make => (
              <option key={make.id} value={make.make}>
                {make.make}
              </option>
            ))}
          </select>
        </label>
        <label>
          Price/ 1 hour
          <select value={selectedPriceRange} onChange={handlePriceChange}>
            <option value="">To $</option>
            {[...Array(50).keys()].map(index => {
              const price = (index + 1) * 10;
              return (
                <option key={price} value={price}>
                  ${price}
                </option>
              );
            })}
          </select>
        </label>
        <button type="button" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div>
        <ul>
          {filteredCars?.map(car => (
            <Auto key={car.id} item={car} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default SearchLease;
