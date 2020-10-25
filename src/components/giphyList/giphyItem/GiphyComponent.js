import React, {memo} from 'react';
import './GiphyComponent.scss';

const GiphyComponent = memo(props => {

    const {item} = props;
    const copyHandler = () => {
        navigator.clipboard.writeText(item.url).then(r => console.log(r))
    };

    return (
        <div className="giphy-container">
            <div className={'img-container'}>
                <img src={item.images.fixed_height_small.url} alt={item.title}/>
            </div>
            <div className={'details-container'}>
                <div>{item.title}</div>
                <div className={'actions-container'}>
                    <button onClick={copyHandler}>Copy</button>
                    <a rel="noopener noreferrer" target={'_blank'} href={item.url}>Redirect</a>
                </div>
            </div>
        </div>);
});

export default GiphyComponent;
