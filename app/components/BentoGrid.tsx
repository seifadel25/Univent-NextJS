import { cn } from "../utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";

export function BentoGridDemo() {
  return (
    <BentoGrid className="mx-auto max-w-7xl ">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={
            i === 1 || i === 2 || i === 5 ? "md:col-span-3" : "md:col-span-2"
          }
        />
      ))}
    </BentoGrid>
  );
}

const items = [
  {
    title: "Intercontinental Sharm El Sheikh Hotel",
    description:
      "Luxurious resort offering exceptional amenities and services.",
    header: "/images/Projects/Inter.png",
  },
  {
    title: "GM Motors Egypt",
    description: "General Motors Egypt 6th of October City Plant.",
    header: "/images/Projects/GM.png",
  },
  {
    title: "Afour Crystals Factory 1 & 2",
    description: "Innovative factory specializing in crystal manufacturing.",
    header: "/images/Projects/Asfour.png",
  },
  {
    title: "Novotel Hotel Cairo Airport",
    description: "Convenient and comfortable accommodation near the airport.",
    header: "/images/Projects/Novotel.png",
  },
  {
    title: "Pachin Paints Factory",
    description: "Leading manufacturer of high-quality paints and coatings.",
    header: "/images/Projects/Pachin.png",
  },

  {
    title: "Al Ahram University",
    description: "Renowned institution dedicated to academic excellence.",
    header: "/images/Projects/Ahram.png",
  },
];
