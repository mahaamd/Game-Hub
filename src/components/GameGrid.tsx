import { Button, SimpleGrid, Text } from "@chakra-ui/react";
import UseGames from "../hooks/UseGames";
import GameCards from "./GameCards";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";
import { Fragment } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isloading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = UseGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];
  console.log(isloading);
  // if (isloading) {
  //   return <GameCardSkeleton />
  // }
  if (error) return <Text>{error.message}</Text>;
  return (
    <>
      {/* <InfiniteScroll */}
      // next={fetchNextPage}
      // hasMore={false}
      // children={undefined}
      // loader={undefined}
      // dataLength={0}
      {/* > */}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
        spacing={10}
        marginY={3}
      >
        {isloading &&
          skeletons.map((item) => (
            <GameCardContainer key={item}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data?.pages.map((page, index) => (
          <Fragment key={index}>
            {page.results.map((item) => (
              <GameCardContainer key={item.id}>
                <GameCards game={item}></GameCards>
              </GameCardContainer>
            ))}
          </Fragment>
        ))}
      </SimpleGrid>
      {/* {hasNextPage && (
          <Button marginY={5} onClick={() => fetchNextPage()}>
            {isFetchingNextPage ? "loading..." : "load more"}
          </Button>
        )} */}
      {/* </InfiniteScroll> */}
    </>
  );
};

export default GameGrid;
