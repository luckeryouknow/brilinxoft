import SharedSpriteSVG from "@/shared/images/SharedSpriteSVG";
import Link from "next/link";

export default function Contacts ({ withIcons }: { withIcons: boolean }) {
  return (
    <div className="flex flex-col gap-4">
      {withIcons ? (
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <SharedSpriteSVG name="mail" />
            <p>brilinxoft@gmail.com</p>
          </div>
          <div className="flex items-center gap-4">
            <SharedSpriteSVG name="phone" />
            <p>+380 959 59 59</p>
          </div>
        </div>
        ): 
      (
        <div className="flex flex-col gap-4">
          <p>+380 959 59 59</p>
          <p>brilinxoft@gmail.com</p>
        </div>
      )}
      <div className="flex items-center gap-6">
        <Link href={"https://www.linkedin.com/company/brilinxoft/"}><SharedSpriteSVG name="linkedIn" /></Link>
        <Link href={"https://www.instagram.com/brilinxoft/"}><SharedSpriteSVG name="instagram" /></Link>
        <SharedSpriteSVG name="facebook" />          
      </div>
    </div>
  )
}