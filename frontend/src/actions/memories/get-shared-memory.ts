'use server';
import envConfig from '@/src/constants/envConfig';
import { Memory } from '@/src/types/memory.types';

export default async function getSharedMemory(id: string) {
  try {
    if (!envConfig.ALLOWED_API_URLS.includes(envConfig.API_URL)) {
      throw new Error('Invalid API URL');
    }
    const idPattern = /^[a-fA-F0-9-]{36}$/; // Example pattern for UUID
    if (!idPattern.test(id)) {
      throw new Error('Invalid ID format');
    }
    const response = await fetch(`${envConfig.API_URL}/v1/memories/${id}/shared`, {
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-cache',
    });
    if (!response.ok) {
      return undefined;
    }
    return (await response.json()) as Memory;
  } catch (err) {
    return undefined;
  }
}
