import React, { useEffect, useState } from "react";
import {Cards, Country, Chart} from "./components"
import styles from "./App.module.css"
import {fetchData} from "./api"
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"


function App() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState("");

  useEffect(() => {
    const fetchedData = async () => {
      setData(await fetchData());
    }
    fetchedData();
  }, []);

   async function handleCountryChange(country){
      const x = await fetchData(country);
      setData(x);
      setCountry(country);
  }


  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div className={styles.container}>
        <Header />
        <Cards data={data}/>
        <Country handleCountryChange={handleCountryChange}/>
        <Chart data={data} country={country}/>
        <Footer />
      </div>
    </div>
  );  
}

export default App;
