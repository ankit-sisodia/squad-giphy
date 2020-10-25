import React, {Component} from 'react';
import {connect} from 'react-redux';
import SearchComponent from './SearchComponent';
import {giphyLoading, searchGiphy} from "../../store/actions";

class SearchContainer extends Component {

    render() {
        const {
            searchGiphy,
            giphyLoading
        } = this.props;

        return <SearchComponent searchGiphy={searchGiphy} giphyLoading={giphyLoading}/>;
    }
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps, {
    searchGiphy,
    giphyLoading
})(SearchContainer);
