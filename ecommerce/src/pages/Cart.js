import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Helmet } from 'react-helmet';


const Cart = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("products") != null) {
      const cartProducts = JSON.parse(localStorage.getItem("products"));
      setProducts(cartProducts);
    } else {
      setProducts([]);
    }
  }, []);

  const deleteProduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  return (
    <div className = 'w-5xl'>
        <Helmet>
        <title>Cart</title>
        <meta name = "description" content = "This is theCart page where you can see your chosen products.You can confirm by buying or remove unwanted products." />
        <meta property = "og:title" content = "Cart Page ,remove products ,buy products" />
      </Helmet>
      <Header />

      <div className = "mt-6 grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-20 xl:gap-y-12 ">
        {products.map((product, index)  => (
          <div key = {index} className = "group relative">
            <div className = "max-h-70 aspect-h-1 aspect-w-2 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src = {product.image}
                alt = {product.imageAlt}
                className = "h-full w-full object-center lg:h-full lg:w-full"
              />
            </div>

            <div className = "mt-4 flex justify-between">
              <div>
                <h3 className = "text-sm text-gray-700">
                  <a href = {product.href}>
                    <span className = "text-m text-slate-600 text-left " />
                    {product.name}
                  </a>
                </h3>
                <h6 className = "text-sm font-medium text-gray-500 display-block text-left pl-2">
                  {product.price}
                </h6>

                <button
                  onClick = {() => deleteProduct(index)}
                  className = "bg-red-200 border-x-2 px-2 items-center ml-7 flex rounded-md border-y-2 border-gray-150">
                  Remove
                </button>

              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Cart;
