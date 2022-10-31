import { lazy } from 'react';
import { Route, Routes } from 'react-router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SharedLayout from './SharedLayout/SharedLayour';

import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import MovieDetails from 'pages/MovieDetails/MovieDetails';


// const Home = lazy(() => import('pages/Home'));
// const Movies = lazy(() => import('pages/Movies'));
// const MovieDetails = lazy(() => import('pages/MovieDetails'));
// const Cast = lazy(() => import('components/Cast'));
// const Reviews = lazy(() => import('components/Reviews'));
// const NotFound = lazy(() => import('pages/NotFound'));


export const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='/movies' element={<Movies />}>
            <Route path='/movies/:movieId' element={<MovieDetails />}>
              <Route path='cast' element />
              <Route path='reviews' element />
            </Route>
          </Route>

          <Route path='*' element />
        </Route>
      </Routes>
      <ToastContainer position='top-right' autoClose={4500} />
    </div>
  );
};