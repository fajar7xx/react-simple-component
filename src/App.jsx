import { useState } from "react";
import "./assets/css/main.css";
import animesData from "./data/animes.json";
import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";
import NavbarSearch from "./components/NavbarSearch";
import NavbarSearchCountResult from "./components/NavbarSearchCountResult";
import Box from "./components/Box";
import AnimeList from "./components/AnimeList";
import AnimeDetail from "./components/AnimeDetail";

const App = () => {
  const [animes, setAnimes] = useState(animesData);
  const [selectedAnime, setSelectedAnime] = useState(animes[0]);

  const handleSelectedAnime = (id) => {
    const newAnime = animes.filter((anime) => anime.mal_id === id);
    setSelectedAnime(newAnime[0]);
  };

  return (
    <>
      <Navbar>
        <NavbarSearch>
          <NavbarSearchCountResult animes={animes} />
        </NavbarSearch>
      </Navbar>

      <MainPage>
        <Box>
          <AnimeList
            animes={animes}
            onHandleSeledtedAnime={handleSelectedAnime}
          />
        </Box>
        <Box>
          <AnimeDetail selectedAnime={selectedAnime} />
        </Box>
      </MainPage>
    </>
  );
};

export default App;
