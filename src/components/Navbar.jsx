import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleNavigation = (item) => {
    const routes = {
      "About": "/about",
      "Blogs": "/blogs", 
      "Projects": "/projects",
      "Contact": "/contact"
    };
    
    if (routes[item]) {
      navigate(routes[item]);
    }
  };
  return (
    <div className='fixed z-[999] w-full px-20 py-8 fony-["NeueMontreal"] flex items-center justify-between'>
      <div className="logo cursor-pointer" onClick={() => navigate("/")} >
       <h1 className="text-3xl font-poppins">LakshyaIO</h1>
      </div>
      <div className="links flex gap-9">
        {["About", "Blogs", "Projects", "Contact"].map(
          (item, index) => (
            <a 
              key={index} 
              className="text-lg cursor-pointer capitalize font-regular hover:text-gray-300 transition-colors"
              onClick={() => handleNavigation(item)}
            >
              {item}
            </a>
          )
        )}
      </div>
    </div>
  );
}

export default Navbar;
