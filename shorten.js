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
  // Generate a random alphanumeric string of specified length
  const shortCode = generateRandomString(length);
  // Create the shortened URL by appending the short code to the base URL
  const shortenedURL = `https://short.url/${shortCode}`;
  return shortenedURL;
}

const originalURL = 'https://www.youtube.com/watch?v=RroDdybvu5s'; /*long url here*/
const shortenedURL = shortenURL(originalURL);
console.log(`Shortened URL: ${shortenedURL}`);