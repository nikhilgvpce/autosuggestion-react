import { useEffect, useState } from 'react'
import './index.css'

function getResults(results = []) {
    return results.map((result) => {
        return (
            <div name='suggestion' className='suggestion'>
                {result}
            </div>
        )
    })
}

function callAPI(searchString) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                `pre-${searchString}`,
                searchString,
                `post-${searchString}`
            ])
        }, 200)
    })
}

const Suggestions = ({ searchString, displaySuggestions, onSuggestionSelect }) => {
    const [results, setResults] = useState([]);
    console.log('displaySuggestions is', displaySuggestions)
    useEffect(() => {
        if (!searchString) return;
        async function fetchResults() {
            const response = await callAPI(searchString);
            setResults(response)
        };
        fetchResults()
    }, [searchString])

    return (
        <div className={ results.length && displaySuggestions ? 'suggestion-box' : 'hide-suggestion-box'} onClick={onSuggestionSelect}>
            {...getResults(results)}
        </div>
    )
}

export default Suggestions;