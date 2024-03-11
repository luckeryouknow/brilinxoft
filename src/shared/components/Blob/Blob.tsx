"use client"

import { useEffect, useState } from "react"

export default function Blob ({ styles, small }: { styles?: string, small: boolean }) {
  const [rotateState, setRotateState] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (rotateState < 360) {
        setRotateState(rotateState + 45);
      } else if (rotateState === 360) {
        setRotateState(0);
      }
    }, 3000)
  })

  return (
    <div className={`absolute z-[-1] top-0 mt-[-200px] right-[-200px] rounded-[50%] blur-3xl ${styles}`}>
      <svg 
        style={{ 
          transform: `rotate(${rotateState}deg)`, 
          transition: "4s ease",
          borderRadius: "50%", 
        }} 
        width="748" 
        height="1017" 
        viewBox="0 0 748 1017" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_373_930)">
          <circle cx="216" cy="384" r="200" fill="#3892F5"/>
        </g>
        <g filter="url(#filter1_f_373_930)">
          <circle cx="413" cy="517" r="200" fill="#B519F4"/>
        </g>
        <g filter="url(#filter2_f_373_930)">
          <circle cx="538" cy="280" r="200" fill="#F10BD0"/>
        </g>
        <defs>
          <filter 
            id="filter0_f_373_930" x="-384" y="-216" 
            width="1200" 
            height="1200" 
            filterUnits="userSpaceOnUse" 
            colorInterpolationFilters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_373_930"/>
          </filter>
          <filter id="filter1_f_373_930" x="-87" y="17" width="1000" height="1000" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_373_930"/>
          </filter>
          <filter id="filter2_f_373_930" x="38" y="-220" width="1000" height="1000" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_373_930"/>
          </filter>
        </defs>
      </svg>

      {/* <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="748" 
        height="748" 
        fill="none">
        <g filter="url(#a)">
          <circle 
            cx="216" 
            cy="384" 
            r="200" 
            fill="#3892F5">
            <animate 
              attributeName="cx" 
              dur="10s" 
              repeatCount="indefinite" 
              values="216; 412; 533; 410; 216"/>
            <animate 
              attributeName="cy" 
              dur="10s" 
              repeatCount="indefinite" 
              values="384; 600; 793 826; 384"/>
            </circle></g><g filter="url(#b)"><circle cx="413" cy="517" r="200" fill="#B519F4"><animate attributeName="cx" dur="10s" repeatCount="indefinite" values="413; 222; 420; 525; 413"/><animate attributeName="cy" dur="10s" repeatCount="indefinite" values="517; 715; 600; 628; 517"/></circle></g><g filter="url(#c)"><circle cx="538" cy="280" r="200" fill="#F10BD0"><animate attributeName="cx" dur="10s" repeatCount="indefinite" values="538; 527; 301; 303; 538"/><animate attributeName="cy" dur="10s" repeatCount="indefinite" values="280; 830; 903; 601; 280"/></circle></g><defs><filter id="a" width="1200" height="1200" x="-384" y="-216" filterUnits="userSpaceOnUse"><feFlood result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_373_930" stdDeviation="200"/></filter><filter id="b" width="1000" height="1000" x="-87" y="17" filterUnits="userSpaceOnUse"><feFlood result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_373_930" stdDeviation="150"/></filter><filter id="c" width="1000" height="1000" x="38" y="-220" filterUnits="userSpaceOnUse"><feFlood result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_373_930" stdDeviation="150"/></filter></defs></svg> */}
    </div>
  )
}