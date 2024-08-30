import Hamburger from "./Hamburger"
import List from "./List"
import { useState } from "react"
import ShelvesMenu from "./ShelvesMenu"

export default function Navbar() : JSX.Element {
  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);

    if(isOpen){
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const elements = [['Home',"/"],
    ['Who we are',"/us"],
    ['Our Brands',"/brands"],
    ['Investors',"/investors"],
    ['News',"latest-news"]]

  return ( 
    <nav className="relative flex flex-row justify-between md:justify-around w-full bg-[#201E43] px-8 py-6">
      <img className="w-36 md:w-48" src="waystar-royco-logo_transparent.png"/>
      <List component_id='navbar' stylish='hidden md:flex gap-12 text-lg' elements={elements} element_style='my-auto text-white gap-2 border-b-[.2rem] border-[#201E43] hover:cursor-pointer hover:border-white transition-[50ms]'/>
      <Hamburger handleMethod={toggleMenu} isOpen={isOpen}/>
      <ShelvesMenu isOpen={isOpen}/>
    </nav>
  )
}
