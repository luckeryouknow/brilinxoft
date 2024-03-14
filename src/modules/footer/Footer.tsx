import { Contacts, Container, Logotype } from "@/shared/components";

export default function Footer () {
  return (
    <>
      <footer className="py-5 border-t-[1px]">
        <Container>
          <div className="flex gap-[66px] md:flex-row md:gap-[106px]">
            <Logotype className="text-[32px] md:text-[56px]" />
            <div className="flex flex-col ml-auto gap-4 items-start md:flex-row md:gap-[56px]">
              <div className="flex flex-col gap-4">
                <button>Services</button>
                <button>About us</button>
                <button>Contacts</button>
              </div>
              <Contacts withIcons={false} />
            </div>
          </div>
          <div className="mt-4 text-xs text-black dark:text-[#D9D9D9]">
            <p>© 2024 Brilinxoft, Systems</p>
            <p>All Rights Reserved.</p>
          </div>
        </Container>
      </footer>
    </>
  )
}