import axios, { AxiosResponse } from 'axios';

export interface APIParams<Query = void, Body = void> {
  url: string;
  query?: Query;
  body?: Body;
}

export const API = {
  get: async <R, Q = void>({ url, query }: Omit<APIParams<Q>, 'body'>) => {
    if (query) {
      url = `${url}?${getParsedSearchParams(
        query as unknown as Record<string, string>,
      )}`;
    }
    try {
      const response: AxiosResponse<R> = await axios.get<R>(url, {});
      return response.data;
    } catch (e) {
      throw new Error(url);
    }
  },

  post: async <T, Q = void, B = void>({
    url,
    query,
    body,
  }: APIParams<Q, B>) => {
    if (query) {
      url = `${url}?${getParsedSearchParams(
        query as unknown as Record<string, string>,
      )}`;
    }
    try {
      const response: AxiosResponse<T> = await axios.post<T>(url, body, {});
      return response.data;
    } catch (error) {
      throw new Error(url);
    }
  },

  patch: async <T, Q = void, B = void>({
    url,
    query,
    body,
  }: APIParams<Q, B>) => {
    if (query) {
      url = `${url}?${getParsedSearchParams(
        query as unknown as Record<string, string>,
      )}`;
    }
    try {
      const response: AxiosResponse<T> = await axios.patch<T>(url, body, {});
      return response.data;
    } catch (error) {
      throw new Error(url);
    }
  },

  put: async <T, Q = void, B = void>({ url, query, body }: APIParams<Q, B>) => {
    if (query) {
      url = `${url}?${getParsedSearchParams(
        query as unknown as Record<string, string>,
      )}`;
    }
    try {
      const response: AxiosResponse<T> = await axios.put<T>(url, body, {});
      return response.data;
    } catch (error) {
      throw new Error(url);
    }
  },

  delete: async <T, Q = void>({ url, query }: APIParams<Q>) => {
    if (query) {
      url = `${url}?${getParsedSearchParams(
        query as unknown as Record<string, string>,
      )}`;
    }
    try {
      const response: AxiosResponse<T> = await axios.delete<T>(url, {});
      return response.data;
    } catch (error) {
      throw new Error(url);
    }
  },
};

const getParsedSearchParams = (query: Record<string, string>) => {
  return new URLSearchParams(query).toString();
};
