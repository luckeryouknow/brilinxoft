"use client"

import Image from "next/image"
import person from "../images/person.jpg";
import { useState } from "react";


export default function OurTeamHarmonicTablet () {
  const [cardsWidth, setCardsWidth] = useState([
    { width: "326px" },
    { width: "70px" },
    { width: "70px" },
    { width: "70px" },
    { width: "70px" },
  ]);

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
  ];

  const handleCardClick = (event: any) => {
    setCardsWidth((cardsWidth) => {
      const copy = cardsWidth;
      copy.find((specific) => {
        if (specific.width === "326px") {
          return (specific.width = "70px");
        };
      });
        copy[Number(event.target.id)].width = "326px";
      return (
        [...copy]
      )
    })
  }

  return (
    <div className="hidden mt-16 gap-6 md:flex xl:hidden">
      {teamArray.map((teamElem, index) => (
        <div
          style={{
            width: cardsWidth[index].width,
          }} 
          className={`relative h-[500px] rounded-[20px] bg-gradient-to-r from-[#3892F5FF] via-[#B519F4FF] to-[#F10BD0FF] transition-all duration-500 ease-linear`} key={teamElem.name}>
          {cardsWidth[index].width === "326px" && (
            <Image className="w-full h-[100%] rounded-[20px]" src={person} alt="person picture" />
            )
          }
          {cardsWidth[index].width === "326px" && (
            <div className="absolute bottom-0 flex flex-col w-full py-2 gap-1 rounded-b-[20px] bg-gradient-to-r from-[#3892F5FF] via-[#B519F4FF] to-[#F10BD0FF] text-center text-white">
              <h3 className="text-[24px]">{teamElem.name}</h3>
              <p className="">{teamElem.position}</p>
            </div>
          )}
          {cardsWidth[index].width !== "326px" && (
            <div
              onClick={(event: any) => handleCardClick(event)}
              id={`${index}`} 
              className="absolute flex items-start py-4 px-4 w-[500px] h-[70px] top-[215px] ml-[-215px] text-xl rotate-[-90deg] uppercase">
                {teamElem.position}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}