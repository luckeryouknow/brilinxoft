import { Container, GradientButton, Section, TransparentButton } from "@/shared/components";
import OurTeamSLider from "./components/OurTeamSlider";
import OurTeamHarmonicTablet from "./components/OurTeamHarmonicTablet";
import OurTeamHarmonicDesktop from "./components/OurTeamHarmonicDesktop";

export default function OurTeam () {
  return (
    <Section>
      <Container>
        <div className="flex flex-col gap-10 mb-5">
          <h2 className="text-[40px] text-left">Our great team</h2>
          <p>
            Our development team is a group of passionate experts who work together to bring your ideas to life. We have the skills and experience to tackle any project, big or small. We believe in the power of collaboration. Our cross-functional development team combines expertise in design, development, and testing to deliver high-quality products on time and within budget.
          </p>
          <div className="hidden md:flex md:items-center md:gap-4">
            <GradientButton text="Contact us" uppercase={true} />
            <TransparentButton text="Online meeting" uppercase={true} />
          </div>
        </div>
        <div className="flex flex-col gap-10 md:hidden">
          <OurTeamSLider />
          <div className="flex flex-col items-center gap-4">
            <GradientButton text="Contact us" uppercase={true} />
            <TransparentButton text="Online meeting" uppercase={true} />
          </div>
        </div>
        <OurTeamHarmonicTablet />
        <OurTeamHarmonicDesktop />
      </Container>
    </Section>
  )
}