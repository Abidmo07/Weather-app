import { useState } from "react"
import Card from "./components/Card"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"



function App() {
  const [location,setLocation]=useState("madrid");
   console.log(location);

  return (
    <>
    
    <NavBar location={setLocation}/>
    <div className="flex items-center justify-center">
      <Card location={location}/>
    </div>
    
    <Footer/>
    </>
  )
}

export default App
