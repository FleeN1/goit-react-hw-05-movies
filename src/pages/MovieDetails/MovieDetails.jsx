import { Suspense, useEffect, useState } from 'react';
import { useParams, Outlet, useLocation, useNavigate, NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { RiReplyLine } from 'react-icons/ri';
import Loader from 'components/Loader/Loader';
import MovieCard from 'components/MovieCard/MovieCard';



const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [status, setStatus] = useState('idle');
    const navigate = useNavigate();
    const location = useLocation();
    const arrowBack = location.state?.from ?? '/';

    useEffect(() => {
        async function getMovieDetails() {
            try {
                setStatus('pending');
                const r = await getMovieDetails(movieId);
                setMovie(r);
                setStatus('resolved');
            } catch (error) {
                toast.error(error.message)
                setStatus('rejected');
            }
        }
        getMovieDetails();
    }, [movieId]);

    const handleSubmit = () => {
        navigate(arrowBack, { replace: true });
    }

    return (
        <>
            <button type='button' onClick={handleSubmit}>
                <RiReplyLine size='14px' />
                Back 😊
            </button>
            {status === 'pending' && <Loader />}
            {movie && (
                <div>
                    <MovieCard movie={movie} />
                    <div>
                        <h2>INFO Movie</h2>
                        <ul>
                            <li>
                                <NavLink to='cast'>Cast</NavLink>
                            </li>
                            <li>
                                <NavLink to='reviews'>Reviews</NavLink>
                            </li>
                        </ul>
                    </div>
                    <Suspense fallback={<Loader />}>
                        <Outlet />
                    </Suspense>
                </div>
            )}
            {!movie || (status === 'rejected' && <h2>Sorry, not found INFO</h2>)}
        </>
    );
};

export default MovieDetails;
