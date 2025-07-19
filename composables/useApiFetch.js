
import { useFetch } from 'nuxt/app';

export const useApiFetch = (path, options = {}) => {
    const base_url = "http://localhost:5000/";


    try {
        return useFetch(base_url + path, {
            ...options,
            watch: false,
            headers: {
                "Accept": "application/vnd.api+json",
                ...options.headers,
            }
        });
    } catch (error) {
        return error;
    }
}
