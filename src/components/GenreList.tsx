import {
  HStack,
  Image,
  List,
  ListItem,
  Button,
  Heading,
} from "@chakra-ui/react";
import UseGenres from "../hooks/UseGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectedGenre: (genre: number) => void;
  selectdGenre: number | undefined;
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
              <Button
                textAlign="left"
                whiteSpace="normal"
                fontWeight={selectdGenre === item.id ? "bold" : "normal"}
                onClick={() => onSelectedGenre(item.id)}
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
