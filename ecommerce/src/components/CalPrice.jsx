
import React, { useEffect, useState } from 'react';

const CalPrice = () => {
    const [totalPrice, setTotalPrice] = useState(0);


    useEffect(() => {
        const products = JSON.parse(localStorage.getItem('products'));

        const calculateTotalPrice = () => {
            let total = 0;
            if (products && Array.isArray(products)) {
                total = products.reduce((acc, product) => acc + product.price, 0);
            }
            setTotalPrice(total);
        };

        calculateTotalPrice();
    }, [localStorage.getItem('products')]); 

    return (
        <>
            <p className="inline">{totalPrice}</p>
        </>
    );
};

export default CalPrice;