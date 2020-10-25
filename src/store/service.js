import axios from 'axios';
import {API_KEY, API_URL, LIMIT} from "../constants";

export const axiosInstance = axios.create({
    baseURL: API_URL
});

class SearchGiphyService {
    static routes = {
        SEARCH_GIPHY: '/v1/gifs/search',
    }

    searchGiphy(filter, page = 0) {
        return axiosInstance.get(SearchGiphyService.routes.SEARCH_GIPHY, {
            params: {api_key: API_KEY, q: filter, limit: LIMIT, offset: page * LIMIT}
        }).then(data => {
            return data.data.data;
        });
    }
}

export default SearchGiphyService;
