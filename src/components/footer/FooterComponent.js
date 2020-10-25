import React from 'react';
import './FooterComponent.scss';

const footerComponent = ({link}) => (
    <div className="footer-container">
        <a target="_blank" rel="noopener noreferrer" href={link}>{link}</a>
    </div>
);

export default footerComponent;
