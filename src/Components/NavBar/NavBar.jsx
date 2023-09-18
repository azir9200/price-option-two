import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';


const NavBar = () => {
  const [open, setOpen] = useState(false)
  const routes = [
    { "id": 1, "path": "/home", "name": "Home" },
    { "id": 2, "path": "/about", "name": "About" },
    { "id": 3, "path": "/services", "name": "Services" },
    { "id": 4, "path": "/contact", "name": "Contact" },
    { "id": 5, "path": "/products", "name": "Products" }

  ];
  return (
    <nav>
      <div onClick={() => setOpen(!open)} >
        {
          open === true ?
            <AiOutlineClose className="text-4xl"  ></AiOutlineClose>

            : <AiOutlineMenu className=" md:hidden text-4xl" ></AiOutlineMenu>
        }

      </div>
      <ul className="md:flex  mr-6">
        {
          routes.map(route => <Link key={route.id} route={route} ></Link>)
        }
      </ul>
    </nav>
  );
};

export default NavBar;