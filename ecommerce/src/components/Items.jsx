import React, { useEffect, useState } from 'react';


const Items = () => {
    const [productCount, setProductCount] = useState(0);
  
    useEffect(() => {
      const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
      setProductCount(storedProducts.length);
    }, [localStorage.getItem('products')]);
  
    return (
        <>
            <p className="inline">{productCount}</p>
        </>
    );
};

export default Items;