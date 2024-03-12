export default function Input ({ placeholder }: { placeholder: string }) {
  return (
    <input 
      placeholder={placeholder} 
      className="block w-full bg-white dark:bg-black pt-11 pb-5 px-4 outline-none border-b-black dark:border-b-white border-b-[1px] text-black dark:text-[#D9D9D9] placeholder-current" />
  )
}