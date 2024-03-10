export default function GradientButton ({ text, uppercase }: { text: string, uppercase: boolean }) {
  return (
    <button className={`max-w-fit px-12 py-[14px] rounded-[20px] bg-gradient-to-r from-[#3892F5FF] via-[#B519F4FF] to-[#F10BD0FF] ${uppercase && "uppercase"}`}>
      {text}
    </button>
  )
}