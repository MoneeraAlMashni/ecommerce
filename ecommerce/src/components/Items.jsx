import React, { useEffect, useState } from 'react';


const Items = ({ sharedData, updateSharedData }) => {
    const [productCount, setProductCount] = useState(0);
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];

    useEffect(() => {
      const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
      setProductCount(storedProducts.length);
    },[storedProducts]);
    
    const handleClick = () => {
        // updateSharedData('New data from Sibling 1');
      };
  
    return (
        <>
            <p className = "inline" onChange = {handleClick}>{productCount}</p>

        </>
    );
};

export default Items;