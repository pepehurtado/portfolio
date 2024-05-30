"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
  <CardBody className="bg-gray-850 dark:bg-black hover:bg-violet-950 dark:hover:bg-gray-900 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">

        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
          <Image
            src="https://unavatar.io/pepehurtado"
            height="1000"
            width="1000"
            className="h-200 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-center items-center mt-5">
          <CardItem
            translateZ={20}
            translateX={0}
            as="button"
            className="px-4 py-2 rounded-xl bg-white dark:bg-black dark:text-black text-black text-base font-bold"
          >
                          <a
  href="https://github.com/pepehurtado"
  target="_blank"
  rel="noopener noreferrer"
  
>
  GitHub
</a>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
export default ThreeDCardDemo;