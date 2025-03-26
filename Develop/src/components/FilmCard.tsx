import type React from 'react';
import { useState, useEffect } from 'react';
// TODO: Uncomment when Film interface is added
import type Film from '../utils/interfaces/Film.interface';
import { IoEyeOutline } from 'react-icons/io5';
import { ImCross } from 'react-icons/im';
import { CgPlayListAdd } from 'react-icons/cg';

// TODO: Define FilmCardProps
interface FilmCardProps {
  currentFilm: Film | null;
  addToWatchList: () => void;
  addToSeenItList: () => void;
  removeFromStorage?: (filmId: string) => void;
}

const FilmCard: React.FC<FilmCardProps> = ({ currentFilm,
  addToWatchList,
  addToSeenItList,
 }) => {

  const [onWatchList, setOnWatchList] = useState(false);
  const [onSeenItList, setOnSeenItList] = useState(false);

  useEffect(() => {
    if (!currentFilm) return;

    const watchList = JSON.parse(localStorage.getItem('filmsToWatch') || '[]');
    const seenList = JSON.parse(localStorage.getItem('alreadySeenFilms') || '[]');

    setOnWatchList(watchList.some((film: Film) => film.imdbID === currentFilm.imdbID));
    setOnSeenItList(seenList.some((film: Film) => film.imdbID === currentFilm.imdbID));
  }, [currentFilm]);

  const removeFromList = (key: 'filmsToWatch' | 'alreadySeenFilms') => {
    if (!currentFilm) return;

    const stored = localStorage.getItem(key);
    if (!stored) return;

    const parsed = JSON.parse(stored);
    const updated = parsed.filter((film: Film) => film.imdbID !== currentFilm.imdbID);
    localStorage.setItem(key, JSON.stringify(updated));

    if (key === 'filmsToWatch') setOnWatchList(false);
    if (key === 'alreadySeenFilms') setOnSeenItList(false);
  };

  const handleAddToWatchList = () => {
    addToWatchList();
    setOnWatchList(true);
  };

  const handleAddToSeenItList = () => {
    addToSeenItList();
    setOnSeenItList(true);
  };

  return (
    <>
      {currentFilm?.Title ? (
        <section className='filmCard'>
          <figure>{/* TODO: Add film poster*/
            <img src={currentFilm.Poster} alt={currentFilm.Title} style={{ width: '200px' }} />}</figure>
          <article className='details'>
          {/*TODO: Add film title, director, actors, released, and genre */}
            {<>
             <p><strong>Director:</strong> {currentFilm.Director}</p>
             <p><strong>Actors:</strong> {currentFilm.Actors}</p>
             <p><strong>Released:</strong> {currentFilm.Released}</p>
             <p><strong>Genre:</strong> {currentFilm.Genre}</p>
            </>}
          </article>
          <article className='plot'>{/* TODO: Add film plot here */
            currentFilm.Plot}</article>           
          {/* If film is on Watch List or Seen It list film can be removed
              Else film can be added to Watch List or Seen It list */}
          <aside className='icons'>
            {(onWatchList || onSeenItList) ? (
              <ImCross 
              style={{ fontSize: '40px', cursor: 'pointer' }}
              onClick={() => {
                if (onWatchList) removeFromList('filmsToWatch');
                if (onSeenItList) removeFromList('alreadySeenFilms');
              }}
              />
            ) : (
              <>
            { /* // TODO: Implement add to WatchList logic here */}
              <CgPlayListAdd 
              style={{ fontSize: '50px', cursor: 'pointer' }} 
              onClick={handleAddToWatchList}
              />
            { /* // TODO: Implement add to Seen It list logic here */}
              <IoEyeOutline 
              style={{ fontSize: '50px', cursor: 'pointer' }} 
              onClick={handleAddToSeenItList}
              />
              </>
              )}
            </aside>
        </section>
      ) : (
        <h1 style={{ margin: '16px 0' }}>Please search for a film.</h1>
      )}
    </>
  );
};

export default FilmCard;
