"use client"

import Image from "next/image"
import person from "../images/person.jpg";
import { useState } from "react";


export default function OurTeamHarmonic () {
  const [openCard, setOpenCard] = useState([
    { width: "300px" },
    { width: "70px" },
    { width: "70px" },
    { width: "70px" },
    { width: "70px" },
  ]);

  const [id, setId] = useState(0);

  const cardClickHandler = (event: any) => {
    const openCardCopy = [...openCard];
    openCardCopy[id].width = "70px";

    setId(Number(event.currentTarget.id));

    openCardCopy[id].width = "300px";

    setOpenCard(openCardCopy);
    console.log(id);
  }

  const teamArray = [
    {
      name: "Orest Tuday",
      position: "Co-founder, CTO, CQO",
    },
    {
      name: "Olha Bilyk",
      position: "Co-founder, CEO",
    },
    {
      name: "Natalia Yermishkina",
      position: "Head of design",
    },
    {
      name: "Ruslan Vorozhbyt",
      position: "Frontend expert",
    },
    {
      name: "Artem Volos",
      position: "Backend & AI expert",
    },
  ]

  return (
    <div className="flex gap-6">
      {teamArray.map((teamElem, index) => (
        <div id={`${index}`} className={`w-[${openCard[index].width}] h-[500px] rounded-[20px] bg-gradient-to-r from-[#3892F5FF] via-[#B519F4FF] to-[#F10BD0FF]`} key={teamElem.name}>
          {/* <Image src={person} alt='person' width={200} height={400} />
            <div className="absolute bottom-0 flex flex-col w-full py-2 gap-1 rounded-[20px] bg-gradient-to-r from-[#3892F5FF] via-[#B519F4FF] to-[#F10BD0FF] text-center">
              <h3 className="text-[24px]">{teamElem.name}</h3>
              <p>{teamElem.position}</p>
            </div> */}
        </div>
      ))}
    </div>
  )
}