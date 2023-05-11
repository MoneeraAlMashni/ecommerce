import React from 'react'
import RatingStars from './RatingStars'
import Sort from './Sort'
const products = [
    {
        id: 1,
        name: 'Flying Ninja',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '£12.00'

    },
    {
        id: 2,
        name: 'Happy Ninja',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
        imageAlt: "Front of men's Basic Tee in white.",
        price: '£18.00'
    }
    ,
    {
        id: 3,
        name: 'Ninja Shouette',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
        imageAlt: "Front of men's Basic Tee in grey.",
        price: '£35.00'
    },
    {
        id: 4,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
        imageAlt: "Front of men's Basic Tee in white.",
        price: '£20.00'

    },
    {
        id: 5,
        name: 'Funny Ninja',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
        imageAlt: "Front of men's Basic Tee in white.",
        price: '£45.00'
    },
    {
        id: 6,
        name: 'Your Ninja',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
        imageAlt: "Front of men's Basic Tee in grey.",
        price: '£32.00',
    }
]

function ProductsList() {
    return (
        <div>
            <div className="bg-white">

                <div className="mx-100 max-w-2xl px-4 py-10 sm:px-9 sm:py-15 lg:max-w-6xl lg:px-8">
                   
                    

                    <h1 className="text-5xl mx-5 font-thin text-left tracking-tight text-violet-900">Shop</h1>
                    <span className='flex text-slate-400 text-left inline font-medium mt-5'>Showing 1-10 of 23 results</span>
                    <Sort className="flex items-end"></Sort>



                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {products.map((product) => (
                            <div key={product.id} className="group relative">
                               
                                <div className="min-h-60 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                    <img
                                        src={product.imageSrc}
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
