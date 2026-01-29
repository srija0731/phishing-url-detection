import React, { useState } from 'react';
import { isValidUrl } from '../utils/validators';

function UrlInput({ onCheck }) {
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidUrl(url)) {
      alert('Please enter a valid URL');
      return;
    }
    onCheck(url);
  };

  return (
    <form onSubmit={handleSubmit} className="url-form">
      <input
        type="text"
        placeholder="Enter URL to check..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button type="submit">Check</button>
    </form>
  );
}

export default UrlInput;
