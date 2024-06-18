
import { useEffect } from "react"
import Beneficios from "./components/Beneficios"
/* import Beneficios_usuarios from "./components/Beneficios_usuarios" */
import ComoFunciona from "./components/ComoFunciona"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
/* import ParaUsuarios from "./components/ParaUsuarios" */
import ReactGA from 'react-ga4';


const App = () => {

  const trackingId = "G-JXQF6061ER";

  useEffect(() => {
    ReactGA.initialize(trackingId);
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  
  return (
    <>
    <Navbar/>
    <div className="max-w-7xl mx-auto pt-20 px-6">
      <HeroSection/>
      <ComoFunciona/>
      {/* <ParaUsuarios/> */}
      <Beneficios/>
      {/* <Beneficios_usuarios/> */}
      <Contact/>
      <Footer/>
    </div>
    </>
    
  )
}

export default App
