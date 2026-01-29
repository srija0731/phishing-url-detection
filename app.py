from flask import Flask, request, jsonify
from flask_cors import CORS
import re

app = Flask(__name__)
CORS(app)  # allow frontend requests

# Example simple heuristic function
def is_phishing_url(url):
    # Rule-based checks (replace with ML model if available)
    suspicious_patterns = [
        r"@",
        r"https?://[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+",  # raw IP
        r"login", r"secure", r"update", r"verify"
    ]
    score = 0
    for pattern in suspicious_patterns:
        if re.search(pattern, url.lower()):
            score += 1
    # Confidence = min(100, score*25)
    confidence = min(100, score * 25)
    return {"isPhishing": score > 0, "confidence": confidence}

@app.route('/check-url', methods=['POST'])
def check_url():
    data = request.get_json()
    url = data.get('url', '')
    if not url:
        return jsonify({"error": "No URL provided"}), 400
    result = is_phishing_url(url)
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
