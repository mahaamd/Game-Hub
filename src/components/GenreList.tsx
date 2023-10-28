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

  const { data, error } = UseGenres();
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
        {data?.results.map((item) => (
          <ListItem paddingY="5px" key={item.id}>
            <HStack>
              <Image
                boxSize="37px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(item.image_background)}
              ></Image>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
