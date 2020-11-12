import React from 'react';
import './index.css';

const Header = () => {

    return (
        <header className="header">
            <a className="headre__logo" href="/"></a>
            <div className="header__buttons">
            </div>
        </header>
    );
};

export default React.memo(Header);
