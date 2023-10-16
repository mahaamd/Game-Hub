import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { AxiosRequestConfig } from 'axios';

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const UseData = <T>(endpoint: string, requestConfig? : AxiosRequestConfig, deps?: any[]) => {
  const [datas, setDatas] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const controller = new AbortController();

      try {
        setIsLoading(true);

        const res = await apiClient.get<FetchResponse<T>>(endpoint, {
          signal: controller.signal, ...requestConfig
        });

        setDatas(res.data.results);
      } catch (err) {
        setError('oops! some thing wrong');
      } finally {
        setIsLoading(false);
      }

      controller.abort();
    };
    fetchData();
  },deps?[...deps] : []);

  return { datas, error, isloading };
};

export default UseData;
