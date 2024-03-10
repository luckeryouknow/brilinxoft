import SharedSpriteSVG from "@/shared/images/SharedSpriteSVG";

export default function Contacts () {
  return (
    <div className="flex flex-col gap-4">
      <p>+380 959 59 59</p>
      <p>info@gmail.com</p>
      <div className="flex items-center gap-6">
        <SharedSpriteSVG name="linkedIn" />
        <SharedSpriteSVG name="instagram" />
        <SharedSpriteSVG name="facebook" />          
      </div>
    </div>
  )
}