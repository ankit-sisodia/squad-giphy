import React, {memo} from 'react';
import Search from "../searchContainer";
import GiphyList from "../giphyList";
import './HomeComponent.scss';

const HomeComponent = memo(() => (
    <div className="main-container">
        <Search/>
        <GiphyList/>
    </div>
))

export default HomeComponent;
