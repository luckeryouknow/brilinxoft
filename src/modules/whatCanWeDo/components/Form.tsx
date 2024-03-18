"use client"

import Input from "./Input";
import Select from 'react-select';
import { useFormik } from "formik";
import { useId } from "react";
import * as Yup from 'yup';


export default function Form () {
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      companyName: "",
      service: "",
      tellMore: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required(),
      phone: Yup.string().required(),
      companyName: Yup.string().required(),
      service: Yup.string().required(),
      tellMore: Yup.string(),
    }),
    onSubmit: (values) => {
      console.log({
        "name": values.name,
        "phone": values.phone,
        "company name": values.companyName,
        "service": values.service,
        "tell more": values.tellMore,
      })
    },
  });

  const dropdownError = formik.touched["service"] && formik.errors["service"];

  const options = [
    { value: 'WebMobile', label: 'Web & mobile app development' },
    { value: 'QA', label: 'Quality Assurance & Testing' },
    { value: 'Design', label: 'UX/UI Design' },
    { value: "Support", label: "Technical Support" },
    { value: "AI", label: "AI apps & Integration" }
  ]

  return (
    <form onSubmit={formik.handleSubmit} className="pb-[120px] overflow-hidden xl:w-1/2">
      <div className="mb-8">
        <Input formik={formik} id={"name"} placeholder="Name" />
        <Input formik={formik} id={"phone"} placeholder="Phone" />
        <Input formik={formik} id={"companyName"} placeholder="Your company name" />
        <div className="relative py-4">
          <Select
            instanceId={useId()}
            options={options} 
            unstyled={true} 
            placeholder={"The service you are interested in"}
            onChange={(option) => formik.setFieldValue("service", option?.label)}
            classNames={{
              control: () => (`pt-3 pb-5 px-4 ${dropdownError ? "border-b-[#C60047]" : "border-b-vlack"} dark:${dropdownError ? "border-b-[#C60047]" : "border-b-white"} border-b-[1px] text-black dark:text-[#D9D9D9]`),
              option: () => ("py-5"),
              menu: () => ("w-full bg-white dark:bg-black"),
              dropdownIndicator: () => (""),
            }} />
            {dropdownError && (
              <p className="absolute right-0 bottom-0 text-[#C60047] text-xs">This field is necessary</p>
            )}
        </div>
        <textarea
          onChange={formik.handleChange}
          id={"tellMore"}
          className="block min-h-[80px] w-full bg-white dark:bg-black pt-8 px-4 outline-none border-b-black dark:border-b-white border-b-[1px] text-black dark:text-[#D9D9D9] placeholder-current" 
          placeholder="Tell us more about your project"
        />
        <button type="submit" className={`
        text-white mt-8 md:mt-10 max-w-fit px-12 py-[14px] rounded-[20px] bg-gradient-to-r from-[#3892F5FF] via-[#B519F4FF] to-[#F10BD0FF] hover:from-100% transition-all ease-out duration-500 uppercase`
        }>
          send
        </button>
      </div>
    </form>    
  )
}