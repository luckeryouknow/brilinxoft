import { Container, Logotype } from "@/shared/components";
import OpenBurgerMenuButton from "./components/OpenBurgerMenuButton";
import FunctionalButtons from "./components/FunctionalButtons";

export default function Header () {
  return (
    <>
      <header className="py-4">
        <Container>
          <div className="flex items-center">
            <Logotype />
            <OpenBurgerMenuButton />
            <div className="hidden ml-auto md:block">
              <FunctionalButtons />
            </div>
          </div>
        </Container>
      </header>
    </>
  );
}