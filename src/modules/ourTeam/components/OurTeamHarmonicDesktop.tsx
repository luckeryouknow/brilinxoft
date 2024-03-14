"use client"

import Image from "next/image"
import person from "../images/person.jpg";
import { useState } from "react";


export default function OurTeamHarmonicDesktop () {
  const [cardsWidth, setCardsWidth] = useState([
    { width: "392px" },
    { width: "156px" },
    { width: "156px" },
    { width: "156px" },
    { width: "156px" },
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
        if (specific.width === "392px") {
          return (specific.width = "156px");
        };
      });
        copy[Number(event.target.id)].width = "392px";
      return (
        [...copy]
      )
    })
  }

  return (
    <div className="hidden overflow-y-hidden mt-16 gap-6 xl:flex">
      {teamArray.map((teamElem, index) => (
        <div
          style={{
            width: cardsWidth[index].width,
          }} 
          className={`relative h-[500px] rounded-[20px] transition-all duration-500 ease-linear`} key={teamElem.name}>
            <Image className="w-full h-[100%] rounded-[20px] object-cover" src={person} alt="person picture" />
          {cardsWidth[index].width === "392px" && (
            <div className="absolute bottom-0 flex flex-col w-full py-2 gap-1 rounded-[20px] bg-gradient-to-r from-[#3892F5FF] via-[#B519F4FF] to-[#F10BD0FF] text-center text-white">
              <h3 className="text-[24px]">{teamElem.name}</h3>
              <p className="">{teamElem.position}</p>
            </div>
          )}
          {cardsWidth[index].width !== "392px" && (
            <div
              onClick={(event: any) => handleCardClick(event)}
              id={`${index}`} 
              className="absolute flex items-start w-[500px] py-4 px-4 h-[156px] bottom-[170px] left-[-175px] text-xl rotate-[-90deg] uppercase cursor-pointer text-white">
                {teamElem.position}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}