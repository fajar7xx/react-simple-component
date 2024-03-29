const AnimeItem = ({ anime, onHandleSeledtedAnime }) => {
  return (
    <>
      <li
        key={anime.mal_id}
        onClick={() => onHandleSeledtedAnime(anime.mal_id)}
      >
        <img src={anime.image} alt={`${anime.title} cover`} />
        <h3>{anime.title}</h3>
        <div>
          <p>
            <span>{anime.year}</span>
          </p>
        </div>
      </li>
    </>
  );
};

export default AnimeItem;
