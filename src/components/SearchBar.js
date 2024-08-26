import React, { useState } from 'react';
import { searchNews } from '../services/newsService';
import NewsCard from './NewsCard';

function SearchBar() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = () => {
        searchNews(query).then((data) => setResults(data.articles));
    };

    return (
        <div className="container mx-auto p-4">
            <div className="flex mb-4">
                <input
                    type="text"
                    className="border p-2 flex-grow"
                    placeholder="Search for news..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button onClick={handleSearch} className="bg-blue-600 text-white p-2 ml-2">Search</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {results.map((article, index) => (
                    <NewsCard key={index} article={article} />
                ))}
            </div>
        </div>
    );
}

export default SearchBar;
