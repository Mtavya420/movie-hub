import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Music } from "../hooks/useMusic";

interface Props {
  song: Music;
}

const MusicCard = ({ song }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={song.image} />
      <CardBody>
        <Heading fontSize="2xl">{song.name}</Heading>
        <Heading fontSize="3xl" color="blue.600">
          {song.artist_name}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default MusicCard;
