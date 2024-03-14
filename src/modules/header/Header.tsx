"use client"

import { Container, Logotype } from "@/shared/components";
import OpenBurgerMenuButton from "./components/OpenBurgerMenuButton";
import FunctionalButtons from "./components/FunctionalButtons";
import BurgerMenu from "./components/BurgerMenu";
import { useState } from "react";

export default function Header () {
  const [right, setRight] = useState("right-[-100%]");

  const openButtonClick = () => {
    setRight("right-0");
  };

  const closeButtonClick = () => {
    setRight("right-[-100%]");
  };

  return (
    <>
      <header className="relative py-4">
        <Container>
          <div className="flex items-center">
            <Logotype />
            <OpenBurgerMenuButton openButtonClick={openButtonClick} />
            <div className="hidden ml-auto md:block">
              <FunctionalButtons />
            </div>
          </div>
        </Container>
        <BurgerMenu 
          closeButtonClick={closeButtonClick}
          right={right}
        />
      </header>
    </>
  );
}