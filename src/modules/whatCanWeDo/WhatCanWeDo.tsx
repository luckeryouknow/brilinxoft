import { Contacts, Container, Section } from "@/shared/components";
import Form from "./components/Form"; 

export default function WhatCanWeDo () {
  return (
    <Section>
      <Container>
        <div id="whatWeCanDo" className="xl:flex xl:gap-6">
          <div className="flex flex-col gap-6 mb-6 xl:flex-col xl:w-1/2 xl:gap-16">
            <h2 className="text-[40px] xl:text-[64px]">What can we do for your business?</h2>
            <p>
              We are here to provide answers to your questions. Our highly qualified specialists are ready to help you find the optimal solutions that meet your needs.
            </p>
            <Contacts withIcons={true} />
          </div>
          <Form />
        </div>
      </Container>
    </Section>
  )
}