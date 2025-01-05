import { useQuery, useMutation } from "@tanstack/react-query";
import axiosInstance from "./client";

/**
 * Custom Hook to fetch data
 * @param {string} key - Unique query key
 * @param {string} url - API endpoint
 * @param {object} options - Additional options for useQuery
 */
export const useFetch = (key, url, options = {}) => {
  return useQuery(
    {
      queryKey: [key],
      queryFn: async () => {
        const response = await axiosInstance.get(url);
        return response;
      },
      options,
    } // Options can now be passed directly here
  );
};

/**
 * Custom Hook to post data
 * @param {string} url - API endpoint
 * @param {function} onSuccess - Callback on success
 * @param {function} onError - Callback on error
 */
export const usePost = (url, { onSuccess, onError }) => {
  return useMutation({
    mutationFn: async (data) => {
      const response = await axiosInstance.post(url, data);
      return response;
    },
    onSuccess,
    onError,
  });
};

/**
 * Custom Hook to put data
 * @param {string} url - API endpoint
 * @param {function} onSuccess - Callback on success
 * @param {function} onError - Callback on error
 */
export const usePut = (url, { onSuccess, onError }) => {
  return useMutation({
    mutationFn: async (data) => {
      const response = await axiosInstance.put(url + "/" + data?.id, data);
      return response;
    },
    onSuccess,
    onError,
  });
};

/**
 * Custom Hook to delete data
 * @param {string} url - API endpoint
 * @param {function} onSuccess - Callback on success
 * @param {function} onError - Callback on error
 */
export const useDelete = (url, { onSuccess, onError }) => {
  return useMutation({
    mutationFn: async ({ id }) => {
      const response = await axiosInstance.delete(url + "/" + id);
      return response;
    },
    onSuccess,
    onError,
  });
};
