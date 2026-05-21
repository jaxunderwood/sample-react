import { useState, useEffect } from 'react';
// Updated import path to match standard capitalized React naming
import MutantCard from '../components/Card';

function App() {
  const [mutants, setMutants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8000/api/mutants')
      .then(res => res.json())
      .then(data => {
        setMutants(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Database fetch failed:", err);
        setLoading(false); // Keeps your UI from hanging forever on error
      });
  }, []);

  if (loading) return <h1>Loading data stream...</h1>;

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>X-Men Database</h1>

      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {mutants.map((individualMutant) => {
          return (
            <MutantCard
              key={individualMutant._id}
              mutant={individualMutant}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
