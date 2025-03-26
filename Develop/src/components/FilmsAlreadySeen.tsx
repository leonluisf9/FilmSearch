// TODO: Uncomment when Film interface is added
import type Film from '../utils/interfaces/Film.interface';
import FilmCard from './FilmCard';

// TODO: Define seenFilmProps
interface SeenFilmProps {
  alreadyWatchedFilms: Film[];
  removeFromStorage: (filmId: string) => void;
}

// TODO: Destructure alreadyWatchedFilms from props
const FilmsAlreadySeen = ({ alreadyWatchedFilms, removeFromStorage }: SeenFilmProps) =>{
  return (
    <ul>
      {alreadyWatchedFilms.map((film) => (
        <FilmCard
          currentFilm={film}
          key={film.Title}
          addToWatchList={() => {}}
          addToSeenItList={() => {}}
          removeFromStorage={removeFromStorage}
        />
      ))}
    </ul>
  );
};

export default FilmsAlreadySeen;


