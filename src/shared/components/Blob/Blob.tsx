"use client"

import { useEffect, useState } from "react";

export default function Blob ({ styles, small }: { styles?: string, small: boolean }) {
  const [circlesPositions, setCirclePositions] = useState(
  small ? (
    [
      { x: 108, y: 192 },
      { x: 213, y: 257 },
      { x: 269, y: 140 },
    ]
  ) : (
    [
      { x: 216, y: 384 },
      { x: 413, y: 517 },
      { x: 538, y: 280 },
    ]
  )
  );

  useEffect(() => {
    setInterval(() => {
      if (small) {
        setCirclePositions([
          { x: Math.random() * 768, y: Math.random() * 768 },
          { x: Math.random() * 768, y: Math.random() * 768 },
          { x: Math.random() * 768, y: Math.random() * 768 },
        ])
      } else {
        setCirclePositions([
          { x: Math.random() * 748, y: Math.random() * 748 },
          { x: Math.random() * 748, y: Math.random() * 748 },
          { x: Math.random() * 748, y: Math.random() * 748 },
        ]);
      }
    }, 3000);
  });

  return (
    <svg
      className={`absolute z-[-1] top-0 right-0 rounded-[50%] rotate-180 blur-3xl ${styles}`}
      xmlns="http://www.w3.org/2000/svg"
      width={`${small ? "384" : "748"}`}
      height={`${small ? "384" : "748"}`}
      fill="none"
    >
      <g filter="url(#a)">
        <circle
          style={{ transition: "all 5s", borderRadius: "50%" }}
          cx={`${circlesPositions[0].x}`}
          cy={`${circlesPositions[0].y}`}
          r="200"
          fill="#3892F5"
        />
      </g>
      <g filter="url(#b)">
        <circle
          style={{ transition: "all 5s", borderRadius: "50%" }}
          cx={`${circlesPositions[1].x}`}
          cy={`${circlesPositions[1].y}`}
          fill="#B519F4"
          r="200"
        />
      </g>
      <g filter="url(#c)">
        <circle
          style={{ transition: "all 5s", borderRadius: "50%" }}
          cx={`${circlesPositions[2].x}`}
          cy={`${circlesPositions[2].y}`}
          r="200"
          fill="#F10BD0"
        />
      </g>
      <defs>
        <filter
          id="a"
          width="1200"
          height="1200"
          x="-384"
          y="-216"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            result="effect1_foregroundBlur_373_930"
            stdDeviation="200"
          />
        </filter>
        <filter
          id="b"
          width="1000"
          height="1000"
          x="-87"
          y="17"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            result="effect1_foregroundBlur_373_930"
            stdDeviation="150"
          />
        </filter>
        <filter
          id="c"
          width="1000"
          height="1000"
          x="38"
          y="-220"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            result="effect1_foregroundBlur_373_930"
            stdDeviation="150"
          />
        </filter>
      </defs>
    </svg>
  )
}