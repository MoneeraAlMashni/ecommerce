import React from 'react'
import { useEffect, useState } from 'react';



const Popularity = () => {
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
    <div className="float-right mt-5 w-60 mr-20  h-30 ">
        <div className='flex justify-between w-20 '>
        <button className="border-b-0 border-x-2 float-left border-t-2 text-violet-800 text-l font-medium px-3" > POPULAR</button>
        <button className=' border-b-2 pl-2 pb-1 w-20 text-left float-left pl-4 text-violet-800 text-l font-medium '>RECENT</button>
        <button className='border-b-2 ml-0 text-left float-left pb-2 w-15  pl-6 '>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#6C2BD9" class="w-5 h-5 ">
                <path fill-rule="evenodd" d="M3.43 2.524A41.29 41.29 0 0110 2c2.236 0 4.43.18 6.57.524 1.437.231 2.43 1.49 2.43 2.902v5.148c0 1.413-.993 2.67-2.43 2.902a41.202 41.202 0 01-5.183.501.78.78 0 00-.528.224l-3.579 3.58A.75.75 0 016 17.25v-3.443a41.033 41.033 0 01-2.57-.33C1.993 13.244 1 11.986 1 10.573V5.426c0-1.413.993-2.67 2.43-2.902z" clip-rule="evenodd" />
            </svg>
        </button></div>
        <div className=" w-60  overflow-y-scroll h-80 mr-3 ">


            {posts && posts.map(event => (
                <li key={event.id} className="flex py-4 first:pt-0 last:pb-0 border border-slate-200 border-t-0  ">
                    <img className="h-10 w-10 " src={event.image} alt="" />

                    <div className="ml-3 overflow-hidden">
                        <p className="text-sm font-medium font-extrabold text-violet-800">{event.title}</p>
                        <p className="text-sm text-slate-500 text-left	 ">{event.date}</p>
                    </div>
                </li>
            ))}
        </div>
    </div>
    )
}

export default Popularity