import AnimeItem from "./AnimeItem";

const AnimeList = ({ animes, onHandleSeledtedAnime }) => {
  return (
    <>
      <ul className="list list-anime">
        {animes?.map((anime) => (
          <AnimeItem
            key={anime.mal_id}
            anime={anime}
            onHandleSeledtedAnime={onHandleSeledtedAnime}
          />
        ))}
      </ul>
    </>
  );
};

export default AnimeList;
