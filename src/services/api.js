import Axios from 'axios';

Axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '941cb65a7dbaeeae793e2e0a05475118';


export const fetchFilms = async () => {
    try {
        const r = await Axios.get(`/trending/movie/day?api_key=${API_KEY}`);
        return r.data.results;
    } catch (error) {
        console.log(error);
    }
};


export const fetchSource = async query => {
    const params = new URLSearchParams({
        api_key: API_KEY,
        query,
    });
    try {
        const r = await Axios.get(`search/movie?${params}`);
        return r.data.results;
    } catch (error) {
        console.log(error);
    }
};


export const fetchMovieDetails = async movieId => {
    try {
        const r = await Axios.get(`movie/${movieId}?api_key=${API_KEY}`);
        return r.data;
    } catch (error) {
        console.log(error);
    }
};

export const fetchMovieCast = async movieId => {
    try {
        const r = await Axios.get(`movie/${movieId}/credits?api_key=${API_KEY}`);
        return r.data.cast;
    } catch (error) {
        console.log(error);
    }
};


export const fetchReviews = async movieId => {
    try {
        const r = await Axios.get(`movie/${movieId}/reviews?api_key=${API_KEY}`);
        return r.data.results;
    } catch (error) {
        console.log(error);
    }
};



// https://api.themoviedb.org/3/movie/76341?api_key=<<api_key>>
// GET /trending/{media_type}/{time_window}