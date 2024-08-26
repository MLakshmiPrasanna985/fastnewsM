const API_KEY = '2132bb0e5c834bdeacd684dfb2680098';
const BASE_URL = 'https://newsapi.org/v2';

export const fetchTopHeadlines = async () => {
    const response = await fetch(`${BASE_URL}/top-headlines?country=in&apiKey=${API_KEY}`);
    return response.json();
};

export const searchNews = async (query) => {
    const response = await fetch(`${BASE_URL}/everything?q=${query}&apiKey=${API_KEY}`);
    return response.json();
};
