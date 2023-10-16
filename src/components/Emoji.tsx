import React from "react";
import meh from "../assets/meh.webp";
import bullsEye from "../assets/bulls-eye.webp";
import thumsUp from "../assets/thumbs-up.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Pros {
  rating: number;
}

const Emoji = ({ rating }: Pros) => {
  if (rating < 3) return null;
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh" },
    4: { src: thumsUp, alt: "recommended" },
    5: { src: bullsEye, alt: "exeptional" },
  };
  return <Image boxSize="25px" {...emojiMap[rating]} />;
};

export default Emoji;
