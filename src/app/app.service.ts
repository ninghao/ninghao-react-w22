import axios from 'axios';
import { appConfig } from './app.config';

export const apiHttpClient = axios.create({
  baseURL: appConfig.apiBaseUrl,
});
