import { Container, Section } from "@/shared/components";
import ServicesList from "./components/ServicesList";

export default function Services () {
  return (
    <Section>
      <Container>
        <h2 className="mb-16 text-center text-[40px]">Our core services</h2>
        <ServicesList />
      </Container>
    </Section>
  )
}