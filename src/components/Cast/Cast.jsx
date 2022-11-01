import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import { fetchMovieCast } from 'services/api';

const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        async function getMoviesCast() {
            try {
                const r = await fetchMovieCast(movieId);
                setCast(r);
            } catch (error) {
                toast.error(error.message)
            }
        }
        getMoviesCast();
    }, [movieId]);
    if (!cast) {
        return;
    }


    return (
    <>
        {
            cast.length !== 0 ? (
                <ul>
                    {cast.map(({ name, profile_path, id, character }) => {
                        return (
                            <li key={id}>
                                <div>
                                    <img src={profile_path} alt={name} />
                                    <p>{name}</p>
                                    <p>Character: {character}</p>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            ) : (
                <p>No information here</p>
                )
   
            }
    </>    
    );
};

Cast.propTypes = {
    cast: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            profile_path: PropTypes.string,
            id: PropTypes.number.isRequired,
            character: PropTypes.string,
        })
    ),
};

export default Cast;