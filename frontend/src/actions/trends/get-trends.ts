'use server';
import envConfig, { isValidApiUrl } from '@/src/constants/envConfig';

export default async function getTrends() {
  try {
    if (!isValidApiUrl(envConfig.API_URL)) {
      throw new Error('Invalid API URL');
    }
    const response = await fetch(`${envConfig.API_URL}/v1/trends`, {
      cache: 'no-cache',
    });

    if (!response.ok) {
      return response;
    }

    const data = await response.json();

    return data;
  } catch (error) {
    return undefined;
  }
}
