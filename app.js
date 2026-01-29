import React, { useState } from 'react';
import UrlInput from './components/UrlInput';
import ResultDisplay from './components/ResultDisplay';
import Loader from './components/Loader';
import { checkUrl } from './services/api';

function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCheck = async (url) => {
    setLoading(true);
    setResult(null);
    try {
      const response = await checkUrl(url);
      setResult(response);
    } catch (err) {
      setResult({ error: 'Failed to check URL' });
    }
    setLoading(false);
  };

  return (
    <div className="app-container">
      <h1>Phishing URL Detector</h1>
      <UrlInput onCheck={handleCheck} />
      {loading && <Loader />}
      {result && <ResultDisplay result={result} />}
    </div>
  );
}

export default App;
