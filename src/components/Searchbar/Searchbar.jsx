import { useState } from "react";
import { toast } from 'react-toastify';
import PropTypes from "prop-types";

export default function SeachBar({ getSearchQuery }) {
    const [input, setInput] = useState('');

    const handleInput = e => {
        setInput(e.target.value.toLowerCase());
        // console.log(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        input.trim === '' ? toast.error('Please enter a new word') : getSearchQuery(input);
        setInput('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    name='input'
                    value={input}
                    type="text"
                    onChange={handleInput}
                    placeholder="Poisk Filmikov"
                />
            <button type="submit">Search</button>
            </form> 
        </div>
    )
};

SeachBar.propTypes = {
    getSearchQuery: PropTypes.func.isRequired,
};