"use client"

import { useEffect, useState } from "react"
import BigBlob from "../../images/BigBlob.png";
import SmallBlob from "../../images/SmallBLob.png";
import Image from "next/image";

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
    <div className={`absolute z-[-1] top-[-200px] right-[-200px] rounded-[50%] blur-3xl ${styles}`}>
      {small ? (
        // <svg 
        //   style={{ 
        //     transform: `rotate(${rotateState}deg)`, 
        //     transition: "4s ease",
        //     borderRadius: "50%", 
        //   }}
        //   xmlns="http://www.w3.org/2000/svg" 
        //   width="495" 
        //   height="504" fill="none">
        //   <g 
        //     filter="url(#a)">
        //     <ellipse 
        //       cx="167.33" 
        //       cy="176.115" 
        //       fill="#3892F5" 
        //       rx="129.33" 
        //       ry="98.4173"/>
        //   </g>
        //   <g filter="url(#b)">
        //     <ellipse 
        //       cx="318.33" 
        //       cy="205.059" 
        //       fill="#B519F4" 
        //       rx="129.33" 
        //       ry="98.4173"/>
        //   </g>
        //   <defs>
        //     <filter 
        //       id="a" 
        //       width="658.659" 
        //       height="596.835" 
        //       x="-162" 
        //       y="-122.303" 
        //       colorInterpolationFilters="sRGB" 
        //       filterUnits="userSpaceOnUse">
        //       <feFlood 
        //         floodOpacity="0" 
        //         result="BackgroundImageFix"/>
        //       <feBlend 
        //         in="SourceGraphic" 
        //         in2="BackgroundImageFix" 
        //         result="shape"/>
        //       <feGaussianBlur 
        //         result="effect1_foregroundBlur_373_947" 
        //         stdDeviation="100"/>
        //     </filter>
        //     <filter 
        //       id="b" 
        //       width="658.659" 
        //       height="596.835" 
        //       x="-11" 
        //       y="-93.3584" 
        //       colorInterpolationFilters="sRGB" 
        //       filterUnits="userSpaceOnUse">
        //       <feFlood 
        //         floodOpacity="0" 
        //         result="BackgroundImageFix"/>
        //       <feBlend 
        //         in="SourceGraphic" 
        //         in2="BackgroundImageFix" 
        //         result="shape"/>
        //       <feGaussianBlur 
        //         result="effect1_foregroundBlur_373_947" 
        //         stdDeviation="100"/>
        //       </filter>
        //     </defs>
        //   </svg>
        
        <Image style={{
          transform: `rotate(${rotateState}deg)`, 
          transition: "4s ease",
          borderRadius: "50%", 
        }} src={SmallBlob} alt="Small Blob" />
      ) : (
        // <svg 
        //   style={{ 
        //     transform: `rotate(${rotateState}deg)`, 
        //     transition: "4s ease",
        //     borderRadius: "50%", 
        //   }} 
        //   width="748" 
        //   height="1017" 
        //   viewBox="0 0 748 1017" 
        //   fill="none" 
        //   xmlns="http://www.w3.org/2000/svg">
        //   <g filter="url(#filter0_f_373_930)">
        //     <circle cx="216" cy="384" r="200" fill="#3892F5"/>
        //   </g>
        //   <g filter="url(#filter1_f_373_930)">
        //     <circle cx="413" cy="517" r="200" fill="#B519F4"/>
        //   </g>
        //   <g filter="url(#filter2_f_373_930)">
        //     <circle cx="538" cy="280" r="200" fill="#F10BD0"/>
        //   </g>
        //   <defs>
        //     <filter 
        //       id="filter0_f_373_930" x="-384" y="-216" 
        //       width="1200" 
        //       height="1200" 
        //       filterUnits="userSpaceOnUse" 
        //       colorInterpolationFilters="sRGB">
        //       <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        //       <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        //       <feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_373_930"/>
        //       </filter>
        //       <filter id="filter1_f_373_930" x="-87" y="17" width="1000" height="1000" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        //       <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        //       <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        //       <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_373_930"/>
        //       </filter>
        //       <filter id="filter2_f_373_930" x="38" y="-220" width="1000" height="1000" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        //       <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        //       <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        //       <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_373_930"/>
        //     </filter>
        //   </defs>
        // </svg>
        <Image style={{
          transform: `rotate(${rotateState}deg)`, 
          transition: "4s ease",
          borderRadius: "50%", 
        }} src={BigBlob} alt="Big Blob"  />
      )
      }
    </div>
  )
}