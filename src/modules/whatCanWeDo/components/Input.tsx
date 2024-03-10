export default function Input ({ placeholder }: { placeholder: string }) {
  return (
    <input 
      placeholder={placeholder} 
      className="block w-full bg-black pt-11 pb-5 px-4 outline-none border-b-[1px] text-[#D9D9D9] placeholder-current" />
  )
}