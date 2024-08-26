// import React, { useEffect, useState } from 'react';
// import { fetchTopHeadlines } from '../services/newsService';
// import NewsCard from './NewsCard';

// function HomePage() {
//     const [news, setNews] = useState([]);

//     useEffect(() => {
//         fetchTopHeadlines().then((data) => setNews(data.articles));
//     }, []);

//     return (
//         <div className="container mx-auto p-4">
//             <h1 className="text-3xl font-bold mb-4">Top Headlines</h1>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {news.map((article, index) => (
//                     <NewsCard key={index} article={article} />
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default HomePage;
import React, { useEffect, useState } from 'react';
import NewsCard from './NewsCard';
import { fetchTopHeadlines } from '../services/newsService';

const HomePage = () => {
  const [news, setNews] = useState([]);
  
  useEffect(() => {
    fetchTopHeadlines()
      .then(data => setNews(data.articles))
      .catch(error => console.error(error));
  }, []);
  
  const renderCategory = (category) => (
    <section id={category.toLowerCase()} className="my-8">
      <h2 className="text-xl font-bold mb-4">{category}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {news.filter(article => article.category === category).map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
    </section>
  );

  return (
    <div className="container mx-auto">
      {['Health', 'Technology', 'Education', 'Sports'].map(category => renderCategory(category))}
    </div>
  );
};

export default HomePage;
