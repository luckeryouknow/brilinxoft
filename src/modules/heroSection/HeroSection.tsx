"use client"

import { Container, GradientButton, Section } from "@/shared/components";
import { useEffect, useState } from "react";

export default function HeroSection () {
  const [circlesPositions, setCirclePositions] = useState([
    { x: 216, y: 384 },
    { x: 413, y: 517 },
    { x: 538, y: 280 },
  ]);

  useEffect(() => {
    setInterval(() => {
      setCirclePositions([
        { x: Math.random() * 748, y: Math.random() * 748 },
        { x: Math.random() * 748, y: Math.random() * 748 },
        { x: Math.random() * 748, y: Math.random() * 748 },
      ]);
    }, 3000);
  });

  return (
    <Section>
      <Container>
        <div className="flex flex-col gap-6 flex-shrink-1 md:max-w-[704px] xl:max-w-[1064px]">
          <h2 className="text-[40px] uppercase font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3892F5FF] via-[#B519F4FF] to-[#F10BD0FF]">
            Empower your business with innovative software solutions tailored to your needs
          </h2>
          <p>We offer custom software development and outsourcing services with our team of experts.</p>
          <div className="xl:mt-5">
            <GradientButton text="Contact us" uppercase={false} />
          </div>
        </div>
        <svg
          className="absolute z-[-1] top-0 right-0 rounded-[50%] rotate-180 blur-3xl"
          xmlns="http://www.w3.org/2000/svg"
          width="748"
          height="748"
          fill="none"
          style={{
            filter: "blur(100px)",
          }}
        >
          <g filter="url(#a)">
            <circle
              style={{ transition: "all 5s", borderRadius: "50%" }}
              cx={`${circlesPositions[0].x}`}
              cy={`${circlesPositions[0].y}`}
              r="200"
              fill="#3892F5"
            />
          </g>
          <g filter="url(#b)">
            <circle
              style={{ transition: "all 5s", borderRadius: "50%" }}
              cx={`${circlesPositions[1].x}`}
              cy={`${circlesPositions[1].y}`}
              fill="#B519F4"
            />
          </g>
          <g filter="url(#c)">
            <circle
              style={{ transition: "all 5s", borderRadius: "50%" }}
              cx={`${circlesPositions[2].x}`}
              cy={`${circlesPositions[2].y}`}
              r="200"
              fill="#F10BD0"
            />
          </g>
          <defs>
            <filter
              id="a"
              width="1200"
              height="1200"
              x="-384"
              y="-216"
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_373_930"
                stdDeviation="200"
              />
            </filter>
            <filter
              id="b"
              width="1000"
              height="1000"
              x="-87"
              y="17"
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_373_930"
                stdDeviation="150"
              />
            </filter>
            <filter
              id="c"
              width="1000"
              height="1000"
              x="38"
              y="-220"
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_373_930"
                stdDeviation="150"
              />
            </filter>
          </defs>
        </svg>
      </Container>
    </Section>
  )
}