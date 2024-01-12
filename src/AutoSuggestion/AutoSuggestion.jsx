import { useEffect, useRef, useState } from "react";
import Suggestions from "../Suggestions";
import Input from "../UIComponents/Input/Input";
import './index.css';

const AutoSuggestion = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const [displaySuggestions, setDisplaySuggestions] = useState(false);

    const handleOnInputChange = (e) => {
        setSearchQuery(e.target.value)
    }

    const handleWindowClick = (event) => {
        if (event.target.classList.contains('parent')) {
            setDisplaySuggestions(false)
        } else if(event.target.classList.contains('query-input')) {
            setDisplaySuggestions(true)
        }
    }

    const handleSuggestionClick = (event) => {
        setSearchQuery(event.target.innerText);
        setDisplaySuggestions(false)
    }

    useEffect(() => {
        window.addEventListener('click', handleWindowClick);
        return () => {
            window.removeEventListener('click', handleWindowClick)
        }
    }, [])

    return (
        <div className="parent">
            <Input className='query-input' placeholder='enter your query' onChange={handleOnInputChange} value={searchQuery} />
            <Suggestions searchString={searchQuery} displaySuggestions={displaySuggestions} onSuggestionSelect={handleSuggestionClick} />
        </div>
    )
}

export default AutoSuggestion;