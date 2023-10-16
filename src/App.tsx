import { HStack, GridItem, Show } from "@chakra-ui/react";
import { Grid } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/UseGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/UseGames";
import SortSelector from "./components/SortSelector";
import GameHeadings from "./components/GameHeadings";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}
// let expences =
function App() {
  const [gameQuery, setSelectedGameQuery] = useState({} as GameQuery);
  return (
    <Grid
      templateAreas={{
        lg: `"nav nav" "aside main"`,
        base: `"nav" "main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar
          onSearch={(searchText) =>
            setSelectedGameQuery({ ...gameQuery, searchText })
          }
        />
      </GridItem>
      <GridItem area="main">
        <GameHeadings gameQuery={gameQuery} />
        <HStack spacing={5} marginY={5}>
          <PlatformSelector
            platform={gameQuery.platform}
            selectedPlatform={(platform) => {
              setSelectedGameQuery({ ...gameQuery, platform });
            }}
          ></PlatformSelector>
          <SortSelector
            sortOrder={gameQuery.sortOrder}
            onSelectedOrder={(sortOrder) =>
              setSelectedGameQuery({ ...gameQuery, sortOrder })
            }
          />
        </HStack>

        <GameGrid gameQuery={gameQuery} />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectdGenre={gameQuery.genre}
            onSelectedGenre={(genre) => {
              setSelectedGameQuery({ ...gameQuery, genre });
            }}
          />
        </GridItem>
      </Show>
    </Grid>
  );
}

export default App;
