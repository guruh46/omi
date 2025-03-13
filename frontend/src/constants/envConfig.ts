const ALLOWED_API_URLS = [
  'https://api.example.com',
  'https://api.anotherexample.com',
];

const envConfig = {
  API_URL: process.env.API_URL,
  NODE_ENV: process.env.NEXT_PUBLIC_NODE_ENV,
  IS_DEVELOPMENT: process.env.NEXT_PUBLIC_NODE_ENV === 'development',
  WEB_URL: process.env.WEB_URL ?? 'https://h.omi.me',
  GLEAP_API_KEY: process.env.NEXT_PUBLIC_GLEAP_API_KEY,
  ALGOLIA_APP_ID: process.env.NEXT_PUBLIC_ALGOLIA_APP_ID ?? '',
  ALGOLIA_SEARCH_API_KEY: process.env.NEXT_PUBLIC_ALGOLIA_API_KEY ?? '',
  ALGOLIA_INDEX_NAME: process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME ?? 'memories',
  ADMIN_KEY: process.env.ADMIN_KEY,
};

export function isValidApiUrl(url) {
  return ALLOWED_API_URLS.includes(url);
}

export default envConfig;
