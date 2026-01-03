import { useEffect, useState } from 'react';
import { fetchMostViewedArticles } from '../api/nytimesApi';

export default function useArticles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchMostViewedArticles()
      .then(data => {
        setArticles(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError(true);
        setLoading(false);
      });
  }, []);

  return { articles, loading, error };
}
