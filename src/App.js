import { useState,useEffect } from "react";
import Cities from "./components/Cities";
import Footer from "./components/Footer";
import News from "./components/News";
import Weather from "./components/weather"

function App() {
  const [weather, setWeather]= useState([]);
    const [isLoading, setIsLoading]= useState(true);

    useEffect(()=>{
      const fetchHandler= async ()=>{
        const data= await fetch('https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=07869fa2579e2ab3ea7d13cfbbdf6537')
        const responseData= await data.json();
        setWeather(responseData);
        setIsLoading(false);
        // console.log(responseData);
      }
      fetchHandler();    
    },[])

  return (
    <div>
      <Weather weather={weather} isLoading={isLoading}/>
      <Cities/>
      <News/>
      <Footer/>
    </div>
  );
}

export default App;
