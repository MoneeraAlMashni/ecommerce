import React from 'react'
import Header from '../components/Header'
import Breadcumb from '../components/Breadcumb'
import ProductsList from '../components/ProductsList'
// import Products from '../components/Products'
// import Popularity from '../components/Popularity'
// import Search from '../components/Search'
import Rightsec from '../components/Rightsec'



const Home = () => {

  return (
    <div>

      <Header />
      <section className="max-w-9xl ml-20 mr-20">

        <section className="mt-8 ml-8">
          <Breadcumb />
        </section>

        <section className="float-left w-10xl">
          <ProductsList />
        </section>

        <section className="algin-right w-xl " >
          <Rightsec />
        </section>


      </section>

    </div>
  )
}

export default Home
