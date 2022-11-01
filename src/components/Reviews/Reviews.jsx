import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import { fetchReviews } from 'services/api';

const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        async function getReviews() {
            try {
                const r = await fetchReviews(movieId);
                setReviews(r);
            } catch (error) {
                toast.error(error.message)
            }
        }
        getReviews();
    }, [movieId]);

    return (
        <>
            {reviews.length !== 0 ? (
                <ul>
                    {reviews.map(({ id, author, content }) => {
                        return (
                            <li key={id}>
                                <p>Author: {author}</p>
                                <p>{content}</p>
                            </li>
                        );
                    })}
                </ul>
            ) : (
                <p>We don't have any reviews</p>
            )}
        </>
    );
};

Reviews.propTypes = {
    reviews: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            author: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
        })
    ),
};

export default Reviews;
