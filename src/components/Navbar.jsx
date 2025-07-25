import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo1 from "../assets/logo1.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 ">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center ">
          <div className="flex items-center flex-shrink-0 ">
            <img className="h-10 w-10 mr-2" src={logo1} alt="Logo" />
            <span className="text-xl tracking-tight">HoloNest</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className=" hidden lg:flex justify-center space-x-12 items-center">
            <a href="#" className="py-2 px-3 border rounded-md">
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
            >
              Create an account
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full py-6 px-5 mt-3 flex flex-col justify-center lg:hidden">
  <ul>
    {navItems.map((item, index) => (
      <li key={index} className="py-4 ">
        <a
          href={item.href}
          className=" text-white hover:text-orange-500 transition-colors duration-300"
        >
          {item.label}
        </a>
      </li>
    ))}
  </ul>
  <div className="flex space-x-6 mt-4">
    <a
      href="#"
      className=" py-2 px-3 border border-white text-white rounded-md hover:bg-white hover:text-neutral-900 transition-colors duration-300"
    >
      Sign In
    </a>
    <a
      href="#"
      className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800 hover:from-orange-600 hover:to-orange-900 transition-colors duration-300"
    >
      Create an account
    </a>
  </div>
</div>

        )}
      </div>
    </nav>
  );
};

export default Navbar;
