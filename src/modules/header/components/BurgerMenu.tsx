import { Blob, Contacts, Container, Logotype } from "@/shared/components";
import FunctionalButtons from "./FunctionalButtons";
import SpriteSVG from "../images/SpriteSVG";
import { MouseEventHandler } from "react";

type Props = {
  closeButtonClick: MouseEventHandler<HTMLButtonElement>,
  right: string,
}

export default function BurgerMenu ({ closeButtonClick, right }: Props) {
  return (
    <div className={`fixed flex flex-col z-10 top-0 ${right} w-full h-screen pt-4 bg-white dark:bg-black`}>
      <Container>
        <div className="flex items-center">
          <Logotype />
          <button onClick={closeButtonClick} className="w-8 h-8 ml-auto md:hidden">
            <div className="w-6 mx-auto">
              <SpriteSVG name="closeBurgerMenu" />
            </div>
          </button>
        </div>
        <FunctionalButtons />
        <div className="absolute right-4 left-4 bottom-10">
          <div className="h-[1px] w-full mb-6 bg-gradient-to-r from-[#3892F5FF] via-[#B519F4FF] to-[#F10BD0FF]"></div>
          <Contacts withIcons={false} />
        </div>
        <Blob small={true} styles="top-1/4" />
      </Container>
    </div>
  )
}