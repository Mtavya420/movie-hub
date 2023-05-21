import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const emojiMap: { [key: string]: ImageProps } = {
  "5": { src: meh, alt: "meh", boxSize: "25px" },
  "6": { src: thumbsUp, alt: "recommended", boxSize: "25px" },
  "7": { src: bullsEye, alt: "exceptional", boxSize: "35px" },
};

const Emoji = ({ rating }: Props) => {
  if (rating <= 5) {
    return null;
  }

  const selectedEmoji =
    rating < 6 ? emojiMap["5"] : rating < 7 ? emojiMap["6"] : emojiMap["7"];

  return <Image {...selectedEmoji} marginTop={1} />;
};

export default Emoji;
