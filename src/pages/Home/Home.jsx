import { useEffect } from "react";
import { useState } from "react"
import { fetchFilms } from "services/api";
import MoviesList  from 'components/MoviesList/MoviesList';

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function getTrend() {
            const r = await fetchFilms();
            setMovies(r);

        }
        getTrend();
    }, []);


    return (
        <div>
            <h2>Trending Today</h2>
            {movies.length > 0 && <MoviesList movies={movies} />}
        </div>
    );
};

export default Home;