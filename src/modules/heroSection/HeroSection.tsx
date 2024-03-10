"use client"

import { Blob, Container, GradientButton, Section } from "@/shared/components";

export default function HeroSection () {
  return (
    <Section>
      <Container>
        <div className="flex flex-col gap-6 flex-shrink-1 md:max-w-[704px] xl:max-w-[1064px]">
          <h2 className="text-[40px] uppercase font-bold text-transparent drop-shadow-2xl bg-clip-text bg-gradient-to-r from-[#3892F5FF] via-[#B519F4FF] to-[#F10BD0FF]">
            Empower your business with innovative software solutions tailored to your needs
          </h2>
          <p>We offer custom software development and outsourcing services with our team of experts.</p>
          <div className="xl:mt-5">
            <GradientButton text="Contact us" uppercase={false} />
          </div>
        </div>
        <Blob small={false} />
      </Container>
    </Section>
  )
}