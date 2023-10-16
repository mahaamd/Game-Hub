import {
  HStack,
  Text,
  Image,
  List,
  ListItem,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import UseGenres, { Genre } from "../hooks/UseGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectdGenre: Genre | null;
}

const GenreList = ({ selectdGenre, onSelectedGenre }: Props) => {
  // const manageClick = (event:MouseEvent) => {
  //     datas.filter((item) => {item.id == event.target.id})
  // }

  const { datas, isloading, error } = UseGenres();
  // if (error) {
  //   return null;
  // }

  // if (isloading) {
  //   return <Spinner />;
  // }
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {datas.map((item) => (
          <ListItem paddingY="5px" key={item.id}>
            <HStack>
              <Image
                boxSize="37px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(item.image_background)}
              ></Image>
              <Button
                textAlign="left"
                whiteSpace="normal"
                fontWeight={selectdGenre?.id === item.id ? "bold" : "normal"}
                onClick={() => onSelectedGenre(item)}
                variant="link"
                fontSize={"lg"}
              >
                {item.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;