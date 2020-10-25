import React from 'react';
import './SearchComponent.scss';

const SearchComponent = props => {

    const {searchGiphy, giphyLoading} = props;

    const searchHandler = e => {
        giphyLoading();
        searchGiphy({filter: e.target.value, page: 0});
    }

    return (
        <div className="content-wrapper">
            <input
                type={'text'}
                placeholder={"Search GIFs"}
                className={'search-input'}
                onChange={searchHandler}
            />
        </div>
    );
}

export default SearchComponent;
