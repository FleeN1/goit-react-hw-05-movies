import PropTypes from 'prop-types';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';

export const MovieItem = ({ movie }) => {
    const location = useLocation();
    const { id, poster_path, title } = movie;
    return (
        <>
            <li>
                <NavLink to={`/movies/${id}`} state={{from: location}}>
                    <img src={poster_path} alt={title} />
                    <p>{title}</p>
                </NavLink>
            </li>
        </>
    );
};

MovieItem.propTypes = {
    movie: PropTypes.shape({
        poster_path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }),
};

export default MovieItem;
