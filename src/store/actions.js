import {combineEpics, ofType} from 'redux-observable';
import {createActions} from "redux-actions";
import {from, of} from 'rxjs';
import {debounceTime, filter, mergeMap} from 'rxjs/operators';
import createAsyncActions, {isStart} from '../createAsyncActions';
import SearchGiphyService from "./service";
import {GIPHY_LOADING, SEARCH_GIPHY} from '../constants';

const {
    searchGiphy,
    searchGiphyFulfilled,
    searchGiphyError,
} = createAsyncActions([
    SEARCH_GIPHY
]);

const {
    giphyLoading
} = createActions(GIPHY_LOADING);

export {
    searchGiphy,
    searchGiphyFulfilled,
    searchGiphyError,
    giphyLoading
}

function searchGiphyEpic(action$) {
    return action$.pipe(ofType(SEARCH_GIPHY), debounceTime(250), filter(isStart),
        mergeMap(action => {
            const {filter, page} = action.payload;
            const service = new SearchGiphyService();
            return from(service.searchGiphy(filter, page)).pipe(
                mergeMap(response => of(searchGiphyFulfilled(response))))
        })
    );
}


export default combineEpics(searchGiphyEpic);
