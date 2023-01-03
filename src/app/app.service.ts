import axios from 'axios';
import { appConfig } from './app.config';

export const apiHttpClient = axios.create({
  baseURL: appConfig.apiBaseUrl,
});

export const setAuthHeader = (token: string) => {
  apiHttpClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const setStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getStorage = <T>(key: string): T | null => {
  const data = localStorage.getItem(key);
  return data ? (JSON.parse(data) as T) : null;
};

export enum StorageKey {
  currentUser = 'currentUser',
}
