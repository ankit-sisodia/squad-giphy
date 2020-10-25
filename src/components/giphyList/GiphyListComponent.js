import React, {memo} from 'react';
import './GiphyListComponent.scss';
import GiphyComponent from "./giphyItem/GiphyComponent";
import {useSelector} from "react-redux";

const GiphyListComponent = memo(() => {
    const giphyList = useSelector(state => state.giphyList);
    const isLoading = useSelector(state => state.giphyLoading);
    return !isLoading ? <div className="giphy-list-container">
        {giphyList.map(giphy => <GiphyComponent key={giphy.id} item={giphy}/>)}
    </div> : <div className={'loading-text'}>Loading Giphy...</div>;
});

export default GiphyListComponent;
