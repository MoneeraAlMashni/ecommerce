import React from 'react'
import Products from '../components/Products'
import Popularity from '../components/Popularity'
import Search from '../components/Search'


const Rightsec = () => {

    return (
        <div className = "float-right lg: w-50 sm: float-center sm: algin-center sm: w-xl">

         <Search />
         <Popularity />
         <Products />

        </div>
    )
}

export default Rightsec