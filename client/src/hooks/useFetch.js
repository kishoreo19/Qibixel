import { useState, useEffect, useCallback } from 'react';
import api from '../utils/api';

/**
 * Custom hook for data fetching with loading, error, and refetch capabilities
 */
export function useFetch(endpoint, params = null, initialData = null) {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get(endpoint, params || {});
      setData(response.data !== undefined ? response.data : response);
    } catch (err) {
      setError(err.message || 'Failed to fetch data');
    } finally {
      setLoading(false);
    }
  }, [endpoint, JSON.stringify(params)]);

  useEffect(() => {
    let isMounted = true;
    fetchData();
    return () => {
      isMounted = false;
    };
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
}
