import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import Search from "./components/Search";

import './App.css';
import Popularity from "./components/Popularity";
import Products from "./components/Products";
import Breadcumb from "./components/Breadcumb";

function App() {
  return (
    <div className="App ">

      <Header />
      <section className="max-w-9xl ml-20 mr-20">
        <section className="mt-8 ml-8">
          <Breadcumb /></section>
        <section className="float-left w-5xl">
          <ProductsList /></section>
        <section className="algin-right w-xl " >
          <Search />

          <Popularity />

        </section>
        <section className="algin-right w-xl " >
        

          <Products />

        </section>
      </section>
    </div>
  );
}

export default App;
