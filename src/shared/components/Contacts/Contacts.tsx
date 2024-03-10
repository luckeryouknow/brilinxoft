import SharedSpriteSVG from "@/shared/images/SharedSpriteSVG";

export default function Contacts ({ withIcons }: { withIcons: boolean }) {
  return (
    <div className="flex flex-col gap-4">
      {withIcons ? (
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <SharedSpriteSVG name="mail" />
            <p>info@gmail.com</p>
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
          <p>info@gmail.com</p>
        </div>
      )}
      <div className="flex items-center gap-6">
        <SharedSpriteSVG name="linkedIn" />
        <SharedSpriteSVG name="instagram" />
        <SharedSpriteSVG name="facebook" />          
      </div>
    </div>
  )
}