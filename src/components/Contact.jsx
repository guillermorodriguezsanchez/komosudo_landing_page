const Contact = () => {
    return (
      <section id="contacto" className="mt-20 border-t py-10 border-neutral-700 dark:text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">Contacto</h2>
          <div className="flex flex-col justify-center mt-10">
          <form className="max-w-md mx-auto dark:text-black">
            <input type="text" placeholder="Nombre" className="w-full p-2 mb-4 border rounded"/>
            <input type="email" placeholder="Correo Electrónico" className="w-full p-2 mb-4 border rounded"/>
            <textarea placeholder="Mensaje" className="w-full p-2 mb-4 border rounded"></textarea>
            <button type="submit" className="bg-gradient-to-r from-lime-500 to-lime-800 text-white py-2 px-4 rounded">Enviar</button>
          </form>
          <p className="mt-8">O contáctanos directamente en <a href="mailto:komosudo.oficial@gmail.com" className="text-lime-500">komosudo.oficial@gmail.com</a></p>
          </div>
          
        </div>
      </section>
    );
  }
  
  export default Contact;