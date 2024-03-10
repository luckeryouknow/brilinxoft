"use client"

import { useTheme } from "next-themes";
import { useState } from "react";

export default function ThemeSwitch () {
  const { theme, setTheme } = useTheme();
  const [margins, setMargins] = useState(
    theme === "dark" ? { left: "ml-1", right: "mr-auto" }
    : 
    { left: "ml-auto", right: "mr-1" }
    );

  const themeHandler = () => {
    if (theme === "dark") {
      setTheme("light");
      setMargins({ left: "ml-1", right: "mr-auto" });
    } else {
      setTheme("dark");
      setMargins({ left: "ml-auto", right: "mr-1" });
    }
  }

  return (
    <button 
      onClick={themeHandler} 
      className="w-[50px] h-[22px] rounded-[40px] border-2 dark:border-white border-black">
      <div className={`w-[26px] h-[14px] ${margins.left} ${margins.right} bg-[#B519F4] rounded-[40px]`} />
    </button>
  )
}