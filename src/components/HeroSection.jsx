
import deportes_img from "../assets/komosudo_blanco.jpeg"
import balance from "../assets/komosudo_amarillo.jpeg"
import { trackButtonClick } from "../utils/analytics"

const HeroSection = () => {
  return (
    <div id="inicio" className="flex flex-col items-center mt-6 lg:mt-20 dark:text-white">
        <h1 className="text-4xl sm:text--6xl lg:text-7xl text-center tracking-wide">
            Maximiza tus ingresos y 
            <span className="bg-gradient-to-r from-lime-500 to-lime-800 text-transparent bg-clip-text">
                {" "} flexibilidad con 
            </span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
            Conecta profesionales del deporte con deportistas que buscan sesiones puntuales!
        </p>
        <div className="flex justify-center my-10">
            <a href="#" className="bg-gradient-to-r from-lime-500 to-lime-800 py-3 px-4 mx-3 rounded-md" onClick={() => trackButtonClick('CTA button', 'Click')}>
            Descubre más
            </a>
        </div>
        <div className="flex mt-10 justify-center">
            {/* <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4">
                <source src={video1} type="video/mp4" />
                Tu navegador no soporta este video
            </video> */}
            <img className="rounded-lg w-1/2 border border-lime-700 shadow-lime-400 mx-2 my-4" src={deportes_img} alt="logo" />
            <img className="rounded-lg w-1/2 border border-lime-700 shadow-lime-400 mx-2 my-4" src={balance} alt="logo" />
        </div>
    </div>
  )
}

export default HeroSection
