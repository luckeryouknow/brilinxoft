"use client"

import { GradientButton } from "@/shared/components";
import Input from "./Input";
import Select from 'react-select';
import { useId } from "react";


export default function Form () {
  const options = [
    { value: 'WebMobile', label: 'Web & mobile app development' },
    { value: 'QA', label: 'Quality Assurance & Testing' },
    { value: 'Design', label: 'UX/UI Design' },
    { value: "Support", label: "Technical Support" },
    { value: "AI", label: "AI apps & Integration" }
  ]

  return (
    <form className="pb-[120px] overflow-hidden xl:w-1/2">
      <div className="mb-8">
        <Input placeholder="Name" />
        <Input placeholder="Phone" />
        <Input placeholder="Your company name" />
        <Select
          instanceId={useId()}
          options={options} 
          unstyled={true} 
          placeholder={"The service you are interested in"}
          classNames={{
            control: () => ("pt-10 pb-5 px-4 border-b-black dark:border-b-white border-b-[1px] text-black dark:text-[#D9D9D9]"),
            option: () => ("py-5"),
            menu: () => ("w-full bg-white dark:bg-black"),
            dropdownIndicator: () => (""),
          }} />
        <Input placeholder="Tell us more about your project" />
      </div>
      <GradientButton onClick={() => {}} text="send" uppercase={true} />
    </form>    
  )
}