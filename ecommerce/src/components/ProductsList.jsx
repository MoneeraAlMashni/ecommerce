import React from 'react'
import RatingStars from './RatingStars'
import Sort from './Sort'
import { useEffect, useState } from 'react';


function ProductsList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setPosts(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
    return (
        <div>
            <div className="bg-white">

                <div className="mx-100 max-w-2xl px-4 py-10 sm:px-9 sm:py-15 lg:max-w-4xl lg:px-4">



                    <h1 className="text-5xl mx-5 font-thin text-left tracking-tight text-violet-900">Shop</h1>
                    <div className='flex justify-between align-items-center mt-5git'>
                        <span className='text-slate-400 text-left inline font-medium '>Showing 1-10 of 23 results</span>
                        <Sort className="ml-full "></Sort>
                    </div>



                    <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
                        {posts.map((product) => (
                            <div key={product.id} className="group relative">

                                <div className="max-h-60 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                    <img
                                        src={product.image}
                                        alt={product.imageAlt}
                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"

                                    />
                                    <div class="absolute inline-flex items-center justify-center w-12 h-14 text-m font-bold text-white bg-green-500 rounded-full -top-2 -right-2 ">Sale!</div>


                                </div>

                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <a href={product.href}>
                                                <span className="text-m text-slate-600 text-left " />
                                                {product.name}
                                            </a>
                                        </h3>
                                        <RatingStars />
                                        <h6 className="text-sm font-medium text-gray-500 display-block text-left pl-2">{product.price}</h6>
                                        <button className='bg-gray-200 border-x-2 px-2 items-center ml-7 flex rounded-md border-y-2 border-gray-150'>Add to cart</button>

                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductsList
