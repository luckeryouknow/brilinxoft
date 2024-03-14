"use client"

import { Container, Logotype } from "@/shared/components";
import OpenBurgerMenuButton from "./components/OpenBurgerMenuButton";
import FunctionalButtons from "./components/FunctionalButtons";
import BurgerMenu from "./components/BurgerMenu";
import { useState } from "react";

export default function Header () {
  const [right, setRight] = useState("right-[-100%]");

  const openButtonClick = () => {

  };

  const closeButtonClick = () => {
    
  };

  return (
    <>
      <header className="relative py-4">
        <Container>
          <div className="flex items-center">
            <Logotype />
            <OpenBurgerMenuButton openButtonClick={() => setRight("right-0")} />
            <div className="hidden ml-auto md:block">
              <FunctionalButtons />
            </div>
          </div>
        </Container>
        <BurgerMenu 
          closeButtonClick={() => setRight("right-[-100%]")}
          right={right}
        />
      </header>
    </>
  );
}