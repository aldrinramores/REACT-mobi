import './App.css';
import SignIn from './components/SignIn';
import MovieRows from './components/MovieRows';
import TvShowsRows from './components/TvShowsRows';
import Bookmarks from './components/Bookmarks';
import Searched from './components/Searched';
import MovieDetails from './components/MovieDetails';
import TvShowsDetails from './components/TvShowsDetails';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Routes>
      <Route  path="/"  element={<MovieRows />} />
      <Route  path="/sign-in"  element={<SignIn />} />
      <Route  path="/tv-shows"  element={<TvShowsRows />} />
      <Route  path="/bookmarks"  element={<Bookmarks />} />
      <Route path="/search/:query"  element={<Searched />} />
      <Route path="/movie-details/:id"  element={<MovieDetails />} />
      <Route path="/tvshows-details/:id"  element={<TvShowsDetails />} />
    </Routes>
    </>
  );
}

export default App;
