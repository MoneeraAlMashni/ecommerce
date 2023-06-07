import React, { useEffect, useState } from 'react';

const Sort = () => {
  const [products, setProducts] = useState([]);
  const [storageData, setStorageData] = useState([]);
  const [selectedSortOption, setSelectedSortOption] = useState('default');

  useEffect(() => {
    if (localStorage.getItem('products') != null) {
      const data = JSON.parse(localStorage.getItem('products'));
      setStorageData(data);
    } else {
      setStorageData([]);
    }
  }, []);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const handleSortChange = (event) => {
    setSelectedSortOption(event.target.value);
  };

  const sortedProducts = () => {
    let sorted = [...products];

    if (selectedSortOption === 'price') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (selectedSortOption === 'date') {
      sorted.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    return sorted;
  };

  return (
    <div>
      <select
        id = "sortOptions"
        className = "bg-white border border-violet-600 text-grey-900 text-sm rounded-lg"
        value = {selectedSortOption}
        onChange = {handleSortChange}
      >
        <option value = "default">Default Sorting</option>
        <option value = "price" onclick = {sortedProducts().map((product) => (
          <li key = {product.id}>{product.title}</li>
        ))}>By Price</option>
        <option value = "date">By Date</option>
      </select>
      <ul>
        
      </ul>
    </div>
  );
};

export default Sort;