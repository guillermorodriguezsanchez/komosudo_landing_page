import { CheckCircle2 } from "lucide-react";
import logo from "../assets/komosudo_amarillo.jpeg";
import { checklistItems } from "../constants";
const Beneficios = () => {
    return (
        <div id="beneficios" className="mt-20 dark:text-white">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
            Beneficios de{" "}
            <span className="bg-gradient-to-r from-lime-500 to-lime-800 text-transparent bg-clip-text">
              KomoSudo.
            </span>
          </h2>
          <div className="flex flex-wrap justify-center mt-10">
            <div className="p-2 w-full lg:w-1/2">
              <img src={logo} alt="Coding" />
            </div>
            <div className="pt-12 w-full lg:w-1/2">
              {checklistItems.map((item, index) => (
                <div key={index} className="flex mb-12">
                  <div className="text-green-400 mx-6 h-10 w-10 p-2 justify-center items-center rounded-full">
                    <CheckCircle2 />
                  </div>
                  <div>
                    <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                    <p className="text-md text-neutral-500">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
}

export default Beneficios
