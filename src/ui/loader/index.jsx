import React, { useState } from 'react';
import './index.css';

const Loader = () => {
    const [dots, setDots] = useState([]);

    setTimeout(() => (
        setDots(dots => (
            dots.length === 3
                ? []
                : [...dots, "."]
        ))
    ), 1000);

    return (
        <div className="loader" >
            <img className="loader__logo" src="https://itechart-by.s3.amazonaws.com/storage/static/svg/logo.svg" alt="Loading"/>
            <h1 className="loader__dots">{dots.join("")}</h1>
        </div>
    );
};

export default React.memo(Loader);
