import React from 'react';
import './index.css';

const Footer = () => {

    return (
        <footer className="footer">
            {`Copyright @ ${new Date().getFullYear()} iTechArt`}
        </footer>
    );
};

export default React.memo(Footer);
