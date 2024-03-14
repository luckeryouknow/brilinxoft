"use client"

import SpriteSVG from "../images/SpriteSVG";
import ThemeSwitch from "./ThemeSwitch";

export default function FunctionalButtons () {
  return (
    <div className="flex flex-col-reverse mt-10 gap-8 md:flex-row md:items-center md:mt-0">
      <div className="flex flex-col gap-6 w-fit md:flex-row md:gap-8">
        <button>About</button>
        <button>Services</button>
        <button>Contacts</button>
      </div>
      <div className="flex gap-8 md:flex-row-reverse md:items-center">
        <ThemeSwitch />
        <button className="flex items-center gap-[2px] uppercase">
          <div>en</div>
          <SpriteSVG name="arrowToBottom" />
        </button>
      </div>
    </div>
  )
}