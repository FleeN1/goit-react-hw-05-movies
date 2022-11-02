import { DEF_IMG, DEF_PATH } from "defaultImages/defaultImages";
import PropTypes from "prop-types";


const MovieCard = ({ movie }) => {
    const { title, vote_average, poster_path, overview, genres, release_date } = movie;


    return (
        <div>
            <img src={poster_path ? DEF_PATH + poster_path : DEF_IMG} width='160px' alt={title} />
            <div>
                <h2>
                    {title} ({release_date.slice(0, 4)})
                </h2>
                <p>User Score: {Math.round(vote_average * 10)}%</p>
                <h3>OverView</h3>
                <p>{overview}</p>
                <h3>Genres</h3>
                <p>{genres.map(genre => genre.name).join(',')}</p>
            </div>
        </div>
    );
};

MovieCard.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        vote_average: PropTypes.number.isRequired,
        poster_path: PropTypes.string.isRequired,
        overview: PropTypes.string.isRequired,
        genres: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
        })
        ),
        release_date: PropTypes.string.isRequired,
    }),
};

export default MovieCard;
