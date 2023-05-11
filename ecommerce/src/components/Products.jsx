import React from 'react'
const products = [
    {
        id: 1,
        name: 'Woo Single #2',
        href: '#',
        price: '£3.00 £2.00 '

    },
    {
        id: 2,
        name: 'Woo Album #4',
        href: '#',
        price: '£9.00'

    } ,
    {
        id: 3,
        name: 'Woo Single #1',
        href: '#',
        price: '£3.00'

    },
]

const Products = () => {
    return (
        <div className="float-right max-w-2xl mt-7 mr-15">
            <h1 className="text-violet-500 border-b-2 text-3xl font-thin text-left ">Products</h1>


            {products && products.map(product => (
       
                    <li key={product.id} className="flex py-4 first:pt-0 last:pb-0">
                        <div className=" overflow-hidden mr-20 flex-w-3xl">
                            <p className="text-sm font-medium font-extrabold text-violet-800 inline">{product.name}</p>
                            <button className='float-right px-3 border ml-20 border-slate-700 '>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"  
                                className="h-4 w-4 items-right justify-between ">
                                <path
                                    d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" />
                                <path
                                    fill-rule="evenodd"
                                    d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.163 3.75A.75.75 0 0110 12h4a.75.75 0 010 1.5h-4a.75.75 0 01-.75-.75z"
                                    clip-rule="evenodd" />
                            </svg>
                        </button>                  
                            <p className="text-sm text-slate-500 border-b-2 text-left ">{product.price}</p>
                        </div>
                    </li>
            ))}
        </div>
    )
}

export default Products
