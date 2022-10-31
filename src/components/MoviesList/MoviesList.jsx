import PropTypes from 'prop-types';
import { MovieItem } from 'components/MoviesItem/MoviesItem';


const MoviesList = ({ movies }) => {
    return (
        <div>
            <ul>
                {movies.map(movie => (
                    <MovieItem movie={movie} key={movie.id} />
                ))}
            </ul>
        </div>
    );
};


MoviesList.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired
        })
    ),
};

export default MoviesList;