import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  // State for the counter
  const [count, setCount] = useState(0);

  // State for the API data
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch data from a public API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Increment the counter
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h1>Hello, World!</h1>

      {/* Counter */}
      <div>
        <p>Count: {count}</p>
        <button onClick={handleIncrement}>Increment</button>
      </div>

      {/* Conditional Rendering */}
      {count > 5 && <p>You've clicked the button more than 5 times!</p>}

      {/* API Data */}
      <div>
        <h2>API Data</h2>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        {data && (
          <pre>
            <code>{JSON.stringify(data, null, 2)}</code>
          </pre>
        )}
      </div>
    </div>
  );
};

export default App;