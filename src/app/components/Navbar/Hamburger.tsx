import { MouseEventHandler, useState } from "react"
import { useRecoilState } from "recoil";
import {NavbarState} from "../../state/atoms/NavbarState";
import "./Hamburger.css";

export default function Hamburger({handleMethod,isOpen}:{handleMethod:MouseEventHandler<HTMLDivElement>,isOpen:boolean}) : JSX.Element {

  
  return (
    <div onClick={handleMethod} className="block md:hidden hamburger-menu my-auto">
      <div className={`hamburger-icon ${isOpen ? 'open' : ''}`}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  )
}

