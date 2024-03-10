import SpriteSVG from "../images/SpriteSVG"

export default function OpenBurgerMenuButton () {
  return (
    <button className="w-8 h-8 ml-auto md:hidden">
      <div className="w-6 mx-auto">
        <SpriteSVG name="openBurgerMenu" />
      </div>
    </button>
  )
}