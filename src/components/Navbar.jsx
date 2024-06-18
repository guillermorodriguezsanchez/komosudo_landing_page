import logo from "../assets/komosudo_blanco.jpeg"
import { navItems } from "../constants"
import {Menu, X} from "lucide-react"
import { useState } from "react"
import Toggle from '../components/ThemeToggle'

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    }

    /* const [count, setCount] = useState(0); */

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blue-lg border-b border-neutral-700/80 dark:text-white">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                    <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
                    <span className="text-xl tracking-tight">KomoSudo</span>
                </div>
                <ul className="hidden lg:flex ml-14 space-x-12">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>
                <div className="hidden lg:flex justify-center space-x-12 items-center ">
                    <a href="#" className="py-2 px-3 border rounded-md border-black dark:bg-lime-400 dark:text-black ">
                    Únete ahora
                    </a>
                </div>
                <div className="flex">
                <Toggle/>
                </div>
                <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={toggleNavbar}>
                        {mobileDrawerOpen ? <X/> : <Menu/>}
                    </button>
                </div>

            </div>
            {mobileDrawerOpen && (
                <div className="fixed right-0 z-20 bg-white w-full p-12 flex flex-col justify-center items-center lg:hidden dark:text-white dark:bg-black">
                    <ul className="justify-center text-center">
                    {navItems.map((item, index) => (
                        <li key={index} className="py-4">
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                    </ul>
                    <div className="flex space-x-6">
                        <a href="#" className="py-2 px-3 border rounded-md">
                        Únete ahora
                        </a>
                    </div>
                    
                </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar
