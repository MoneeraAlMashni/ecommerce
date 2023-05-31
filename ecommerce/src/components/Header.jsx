import React from 'react'
import { useNavigate} from 'react-router-dom'
import CalPrice from './CalPrice';
import Items from './Items';


const Header = () => {
    const navigate = useNavigate();
    const navigateHome = useNavigate();
   
    const redirectToHome = () => {
        navigateHome('/');
    };

    const redirectToPage = () => {
        navigate('/cart');
    };
    const handleChange = (event) =>{
        event.preventDefault();
        const todo = event.target.elements.todo.value;
        console.log(todo);

    }
    return (

        <div>

            <header class="bg-violet-900 ">
                <nav class=" flex h-8 max-w-7xl border-collapse items-center justify-between p-1 " aria-label="Global">

                    <div class=" lg:flex border-collapse mx-0 h-8 ">

                        <a href="#" onClick={redirectToHome} class="text-m leading-6 text-white py-1 px-5 hover:bg-violet-950 ">Home</a>
                        <a href="#" class="text-m leading-6 text-white lg:border-l-2 px-5 border-violet-950 hover:bg-violet-950 py-1">Gallery</a>
                        <a href="#" class="text-m leading-6 text-white lg:border-l-2 px-5 border-violet-950 hover:bg-violet-950 py-1 ">Blog</a>
                        <a href="#" class="text-m leading-6 text-white lg:border-l-2 px-5 border-violet-950 hover:bg-violet-950 py-1 ">Shop</a>
                        <a href="#" class="text-m leading-6 text-white lg:border-l-2 px-5 border-violet-950 hover:bg-violet-950 py-1 ">Shortcodes</a>
                        <a href="#" class="text-m leading-6 text-white lg:border-l-2 lg:border-r-2 px-5 border-violet-950 hover:bg-violet-950 py-1 ">About</a>

                    </div>

                    <div class=" lg:flex lg:flex-1 lg:justify-end h-8 flex-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 30" stroke-width="1.5" stroke="white" class="file: mt-2 h-8 w-8 pb-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>

                        <button onClick={redirectToPage} onChange={handleChange} class="text-sm h-8 font-semibold leading-5 text-slate-100 justify-center py-2  lg:border-r-2 pr-5 border-violet-950 ">
                            <Items/> items - <CalPrice /> 
                        </button>
                    </div>

                </nav>

            </header>

        </div>
    )
}

export default Header