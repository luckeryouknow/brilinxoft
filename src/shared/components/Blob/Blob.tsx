"use client"

export async function Blob ({ styles, small }: { styles?: string, small: boolean }) {
  return (
    <svg
      className={`absolute z-[-1] top-0 right-[-200px] rounded-[50%] transition-[10s ease-in-out] blur-3xl ${styles}`}
      xmlns="http://www.w3.org/2000/svg"
      width={`${small ? "384" : "748"}`}
      height={`${small ? "384" : "748"}`}
      fill="none"
    >
      <g filter="url(#a)">
        <circle
          className="trantsition-[10s ease]"
          cx="216"
          cy="384"
          r="200"
          fill="#3892F5"
        >
          <animate attributeName="cx" values="216; 412; 533; 410; 216" dur="10s" repeatCount="indefinite" />
          <animate attributeName="cy" values="384; 600; 793 826; 384" dur="10s" repeatCount="indefinite" />
        </circle>
      </g>
      <g filter="url(#b)">
        <circle
          className="trantsition-[10s ease]"
          cx="413"
          cy="517"
          fill="#B519F4"
          r="200"
        >
          <animate attributeName="cx" values="413; 222; 420; 525; 413" dur="10s" repeatCount="indefinite" />
          <animate attributeName="cy" values="517; 715; 600; 628; 517" dur="10s" repeatCount="indefinite" /> 
        </circle>
      </g>
      <g filter="url(#c)">
        <circle
          className="trantsition-[10s ease]"
          cx="538"
          cy="280"
          r="200"
          fill="#F10BD0"
        >
          <animate attributeName="cx" values="538; 527; 301; 303; 538" dur="10s" repeatCount="indefinite" />
          <animate attributeName="cy" values="280; 830; 903; 601; 280" dur="10s" repeatCount="indefinite" />
        </circle>
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