export default function SpriteSVG ({ name }: { name: string }) {
  switch (name) {
    case "openBurgerMenu":
      return (
        <svg 
          className="stroke-[#0F0F0F] dark:stroke-[#D9D9D9]"
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          fill="none">
          <path  
            strokeWidth="2" 
            d="M0 7.6362h24M0 16.3633h24"
          />
        </svg>
      )
    case "arrowToBottom":
      return (
        <svg
          className="dark:text-white light:text-black" 
          xmlns="http://www.w3.org/2000/svg" 
          width="18" 
          height="18" 
          fill="none">
          <path 
            fill="currentColor" 
            fillRule="evenodd" 
            d="m13.1465 6.3965-4.5 4.5L9 11.25l.3535-.3535-4.5-4.5-.707.707L9 11.957l4.8535-4.8535-.707-.707Z"/>
        </svg>
      )
    case "closeBurgerMenu":
      return (
        <svg 
          className="fill-[#0F0F0F] dark:fill-[#FAFAFA]"
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" fill="none">
          <path 
            fillRule="evenodd" 
            d="m18.7 6.7-12 12-1.41-1.41 12-12L18.7 6.7Zm-1.41-1.38v-.03c.39-.4 1.02-.4 1.41 0 .4.39.4 1.02 0 1.41h-.03l-1.38-1.38ZM6.7 18.67v.03c-.39.4-1.02.4-1.41 0-.4-.39-.4-1.02 0-1.41h.03l1.38 1.38Z"/>
          <path 
            fillRule="evenodd" 
            d="m5.29 6.7 12 12 1.41-1.41-12-12L5.29 6.7ZM6.7 5.32v-.03c-.39-.4-1.02-.4-1.41 0-.4.39-.4 1.02 0 1.41h.03L6.7 5.32Zm10.59 13.35v.03c.39.4 1.02.4 1.41 0 .4-.39.4-1.02 0-1.41h-.03l-1.38 1.38Z"/>
        </svg>
      )
  }
}