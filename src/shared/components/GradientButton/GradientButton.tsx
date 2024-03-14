import { MouseEventHandler } from "react"

type Props = {
  text: string,
  uppercase: boolean,
  onClick: MouseEventHandler<HTMLButtonElement>
}

export default function GradientButton ({ text, uppercase, onClick }: Props) {
  return (
    <button 
      onClick={onClick}
      className={`
        text-white max-w-fit px-12 py-[14px] rounded-[20px] bg-gradient-to-r from-[#3892F5FF] via-[#B519F4FF] to-[#F10BD0FF] hover:from-100% transition-all ease-out duration-500 ${uppercase && "uppercase"}`}>
      {text}
    </button>
  )
}