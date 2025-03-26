import type React from 'react';
// TODO: Uncomment when Film interface is added
import type Film from '../utils/interfaces/Film.interface';
import FilmCard from './FilmCard';

// TODO: Define watchListFilmProps
interface WatchListFilmProps {
  filmsToWatch: Film[];
  removeFromStorage: (filmId: string) => void;
}

// TODO: Destructure filmsToWatch from props
const FilmsToWatchList : React.FC<WatchListFilmProps> = ({ filmsToWatch, removeFromStorage }) => {
  return (
    <ul>
      {filmsToWatch.map((film) => (
        <FilmCard
          currentFilm={film}
          key={film.imdbID}
          addToWatchList={() => {}}
          addToSeenItList={() => {}}
          removeFromStorage={removeFromStorage}
        />
      ))}
    </ul>
  );
};

export default FilmsToWatchList;
