// import type React from 'react';
import { useEffect, useState } from 'react';
import FilmsToWatchList from '../components/FilmsToWatchList';
// TODO: Uncomment when Film interface is added
import type Film from '../utils/interfaces/Film.interface';

const WatchList = () => {
  // TODO: Add Film interface to state variable
  const [filmsToWatch, setFilmsToWatch] = useState<Film[]>([]);

  // TODO: Add correct types to the following parameters
  const removeFromStorage = (
    e: React.MouseEvent<HTMLButtonElement>,
    currentlyOnWatchList: boolean,
    currentlyOnSeenItList: boolean,
    title: string
  ) => {
    e.preventDefault();
    if (currentlyOnWatchList) {

      // TODO: Add Film interface
      let parsedFilmsToWatch: Film[] = [];

      const storedFilmsToWatch = localStorage.getItem('filmsToWatch');

      if (typeof storedFilmsToWatch === 'string') {
        parsedFilmsToWatch = JSON.parse(storedFilmsToWatch);
      }
      parsedFilmsToWatch = parsedFilmsToWatch.filter(
        (film) => film.Title !== title
      );
      setFilmsToWatch(parsedFilmsToWatch);
      localStorage.setItem(
        'filmsToWatch', 
        JSON.stringify(parsedFilmsToWatch));
  }  else if (currentlyOnSeenItList) {
      // TODO: Add Film interface
      let parsedAlreadySeenFilms: Film[] = [];
      const storedAlreadySeenFilms = localStorage.getItem('alreadySeenFilms');
      if (typeof storedAlreadySeenFilms === 'string') {
        parsedAlreadySeenFilms = JSON.parse(storedAlreadySeenFilms);
      }
      parsedAlreadySeenFilms = parsedAlreadySeenFilms.filter(
        (film) => film.Title !== title
      );
      localStorage.setItem(
        'alreadySeenFilms',
        JSON.stringify(parsedAlreadySeenFilms)
      );
    }
  };

  useEffect(() => {
    // const parsedFilmsToWatch = JSON.parse(
      // TODO: Add correct type assertion
    const stored = localStorage.getItem('filmsToWatch');
            // 5. ✅ Add correct type assertion
    const parsedFilmsToWatch: Film[] = stored ? JSON.parse(stored) : [];
    setFilmsToWatch(parsedFilmsToWatch);
  }, []);

  return (
    <>
      <h1 className='pageHeader'>Watch List</h1>
      {(!filmsToWatch?.length || filmsToWatch?.length === 0) ? (
        <h1 style={{ margin: '16px 0' }}>Add films to your watchlist.</h1>
      ) : (
        <FilmsToWatchList
          filmsToWatch={filmsToWatch}
          removeFromStorage={(filmId) => removeFromStorage({} as React.MouseEvent<HTMLButtonElement>, true, false, filmId)}
        />
      )}
    </>
  );
};

export default WatchList;
