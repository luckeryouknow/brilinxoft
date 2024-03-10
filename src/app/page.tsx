import { ChooseUs, DiscussionSection, HeroSection, Services, Technologies, WhoWeAre } from "@/modules";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Services />
      <DiscussionSection />
      <Technologies />
      <WhoWeAre />
      <ChooseUs />
    </main>
  );
}
