// import React from 'react';

// function NewsCard({ article }) {
//     return (
//         <div className="border p-4 rounded shadow">
//             <h2 className="text-xl font-bold mb-2">{article.title}</h2>
//             <p className="text-gray-700 mb-4">{article.description}</p>
//             <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-600">Read more</a>
//         </div>
//     );
// }

// export default NewsCard;
import React from 'react';

function NewsCard({ article }) {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white transition-transform transform hover:scale-105">
            <img className="w-full h-48 object-cover" src={article.urlToImage} alt={article.title} />
            <div className="p-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{article.title}</h2>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.description}</p>
                <a 
                    href={article.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                    Read more
                </a>
            </div>
        </div>
    );
}

export default NewsCard;
