import { features_usuarios } from "../constants"


const ParaUsuarios = () => {
    return (
        <div className="relative mt-20 border-b border-neutral-800">
          <div className="text-center">
            
            <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
              Para{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
                Deportistas
              </span>
            </h2>
          </div>
          <div className="flex flex-wrap justify-center mt-10 lg:mt-20">
            {features_usuarios.map((feature, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
                <div className="flex flex-col items-center">
                  <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                    {feature.icon}
                  </div>
                  <div>
                    <h5 className="mt-1 mb-6 text-xl text-center">{feature.text}</h5>
                    <p className="text-md p-2 mb-20 text-neutral-500 text-center">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}

export default ParaUsuarios
