import axios from 'axios';
import { appConfig } from './app.config';

export const apiHttpClient = axios.create({
  baseURL: appConfig.apiBaseUrl,
});

apiHttpClient.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywibmFtZSI6IuadjueZvSIsImlhdCI6MTY3MjYyNDI0NX0.aDH0TavLMId9iTrmOPEwVvppzgkcK6nbp7aJ3JeZd-ZPtzmskdlr-MlEyKiT1TJjpSec4hAthwUbahkWweTNDCgCrmggO3vxIC9wyrrSbyisao_A29vcdj1fZud40rH2l1pdgO-Q8_8MOF40hzKjNYsVwHOglzTQnvmVX5Is_q4kPSmw5F-mPQXORz7vYMZhjq-b8JWU0qz_WjsCzfX_OzvEkag7JYQrwPCdzNb2PfyH9lKXZdK71v6BR7g39wvaz1eBAGZin__00ycZ_bv6L7RsnnCf129ufg2Q4FxCQf2aFpcHGe48M6ZY9WLlrT2IjNqfRYl2DHzGIlWDrE2JTqK80AOqdKfiLUg3GiRS8W2K0VzIOO-zzaQmJaxPQKG58m4GnglNfMthgJ7VxkBUqN_8YU_nqS9y-z3crdthHyG1O-hpYGynrojmfWAzxWTxd8yBw50g36ojT3YOWeEag7U_iXpdOaTPBVuI3u6lDosiWXbfD693qrz5zcKpHu46tS-VLCkmy1Yt-KQ3mwxt12bFHlw3fgGEsl_hiMFjeZ1-nDhe0pNHbJBK0kyRlJHukpKf54VMf6NN93wl1zzwPKyD8-qjxGZOc-JiOqlUU03f7BATcMVlO_QbYAj4eCox_TtYBPfWBksHuMYA3zvkD6E9OIg9P3Y52-JTyCP8r5k';

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
