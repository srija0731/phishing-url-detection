export async function checkUrl(url) {
  // Replace with your backend endpoint
  const response = await fetch('http://localhost:5000/check-url', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url })
  });
  return response.json();
}
