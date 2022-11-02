import { useEffect } from "react";
import { useState } from "react"
import { fetchFilms } from "services/api";
import MoviesList  from 'components/MoviesList/MoviesList';
import { Section, Title } from "./Home.styled";

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
        <main>
            <Section>
                <Title>Trending Today</Title>
                {movies.length > 0 && <MoviesList movies={movies} />}
            </Section>
        </main>
    );
};

export default Home;