import {isError, isFulfilled} from "../createAsyncActions";
import {GIPHY_LOADING, SEARCH_GIPHY} from "../constants";


const initialState = {
    giphyList: [],
    giphyLoading: false
}
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_GIPHY: {
            if (!isFulfilled(action)) return state;
            if (isError(action)) return {
                ...state,
                giphyLoading: false
            };
            const giphyList = [...initialState.giphyList, ...action.payload];
            let newState = {...state, giphyList, giphyLoading: false};
            return newState;
        }
        case GIPHY_LOADING: {
            return {
                ...state,
                giphyLoading: true
            }
        }
        default:
            return state;
    }
}

export default rootReducer;
