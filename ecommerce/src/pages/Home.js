import React  from 'react'
import Header from '../components/Header'
import Breadcumb from '../components/Breadcumb'
import ProductsList from '../components/ProductsList'
import Rightsec from '../components/Rightsec'
import { useState ,useEffect } from 'react'
import { Helmet } from 'react-helmet';


let carts=[]
 if (localStorage.getItem("products") != null) {
  carts = JSON.parse(localStorage.getItem("products"));
} else {
  carts=[];
}

const Home = () => {
  const [sharedData, setSharedData] = useState(carts);

  useEffect(() => {
  }, [sharedData]);

  const updateSharedData = (newData) => {
    setSharedData(carts.push(newData));
  };

  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="This is the home page where you can see the products." />
        <meta property="og:title" content="Home Page" />
      </Helmet>

       <Header sharedData={sharedData} updateSharedData={updateSharedData} /> 
      <section className="max-w-9xl ml-20 mr-20">

        <section className="mt-8 ml-8">
          <Breadcumb />
        </section>

        <section className="float-left w-10xl">
          <ProductsList sharedData={sharedData} updateSharedData={updateSharedData}/>
        </section>

        <section className="algin-right w-xl " >
          <Rightsec />
        </section>

      </section>

    </div>
  )
}

export default Home
