function generateRandomString(length) {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let randomString = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    randomString += charset[randomIndex];
  }
  return randomString;
}

function shortenURL(originalURL, length = 6) {
  const shortCode = generateRandomString(length);
  const shortenedURL = `https://short.url/${shortCode}`;
  return shortenedURL;
}

const originalURL = 'YOUT LONG URL';
const shortenedURL = shortenURL(originalURL);
console.log(`Shortened URL: ${shortenedURL}`);
