import Loader from "components/Loader/Loader";
import MoviesList from "components/MoviesList/MoviesList";
import Searchbar from "components/Searchbar";
import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchSource } from "services/api";
import { Container } from "./Movie.styled";




const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');
    const [status, setStatus] = useState('idle');
    const [searchParams, setSearchParams] = useSearchParams();
    const movieNames = searchParams.get('query') ?? '';

    const newQuery = query => {
        const newParams = query !== '' ? { query } : {};
        setSearchParams(newParams);
    };


    useEffect(() => {
        if (movieNames === '') {
            return;
        }
        async function getMovies() {
            try {
                setStatus('pending');
                const r = await fetchSource(movieNames);
                setMovies(r);
                setStatus('resolved');
            } catch (error) {
                setStatus('rejected');
                toast(error.message);
            }
        }
        getMovies();
    }, [movieNames]);

    useEffect(() => {
        if (query === '') {
            return;
        }
        async function getMovies() {
            try {
                setStatus('pending');
                const r = await fetchSource(query);
                setMovies(r);
                setStatus('resolved');
            } catch (error) {
                setStatus('rejected');
                toast(error.message);
            }
        }
        getMovies();
    }, [query]);


    const handleSearch = input => {
        setQuery(input.trim());
        newQuery(input.trim());
    }

    return (
        <Container>
            <Searchbar getSearchQuery={handleSearch} />
            
            {movies.length > 0 && <MoviesList movies={movies} />}
            {status === 'pending' && <Loader/>}
        </Container>
    )
}

export default Movies;