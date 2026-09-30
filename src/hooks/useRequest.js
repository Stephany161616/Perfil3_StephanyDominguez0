import { useCallback, useEffect, useState } from 'react';

export default function useRequest(endpoint) {
  const [response, setResponse] = useState(null);
  const [status, setStatus] = useState('loading');
  const [message, setMessage] = useState('');

  const load = useCallback(async () => {
    setStatus('loading');
    setMessage('');
    try {
      const res = await fetch(endpoint);
      if (!res.ok) {
        throw new Error(`El servidor respondió con el código ${res.status}`);
      }
      const json = await res.json();
      setResponse(json);
      setStatus('success');
    } catch (err) {
      setMessage(err.message || 'No fue posible obtener los datos');
      setStatus('error');
    }
  }, [endpoint]);

  useEffect(() => {
    load();
  }, [load]);

  return {
    response,
    isLoading: status === 'loading',
    isError: status === 'error',
    message,
    reload: load,
  };
}
