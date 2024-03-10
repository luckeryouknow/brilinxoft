"use client"

import SpriteSVG from "../images/SpriteSVG";
import ThemeSwitch from "./ThemeSwitch";

export default function FunctionalButtons () {
  return (
    <div className="flex items-center gap-16">
      <div className="flex items-center gap-6">
        <button>About</button>
        <button>Services</button>
        <button>Contacts</button>
      </div>
      <div className="flex gap-16">
        <button className="flex items-center gap-[2px] uppercase">
          <div>en</div>
          <SpriteSVG name="arrowToBottom" />
        </button>
        <ThemeSwitch />
      </div>
    </div>
  )
}