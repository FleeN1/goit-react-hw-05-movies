import { useState } from "react";
import { toast } from 'react-toastify';
import PropTypes from "prop-types";
import { Button, FormIn, Input } from "./Searchbar.styled";

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
            <FormIn onSubmit={handleSubmit}>
                <Input
                    name='input'
                    value={input}
                    type="text"
                    onChange={handleInput}
                    placeholder="Poisk Filmikov"
                />
            <Button type="submit">Search</Button>
            </FormIn> 
        </div>
    )
};

SeachBar.propTypes = {
    getSearchQuery: PropTypes.func.isRequired,
};