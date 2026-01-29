import React from 'react';

function ResultDisplay({ result }) {
  if (result.error) {
    return <div className="error">{result.error}</div>;
  }

  return (
    <div className={`result ${result.isPhishing ? 'phishing' : 'safe'}`}>
      {result.isPhishing ? (
        <p>⚠️ This URL looks suspicious (possible phishing)</p>
      ) : (
        <p>✅ This URL appears safe</p>
      )}
      <small>Confidence: {result.confidence}%</small>
    </div>
  );
}

export default ResultDisplay;
