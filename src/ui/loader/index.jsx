import React from 'react';
import FormLoader from 'ui/form-loader';
import './index.css';

const Loader = () => {

    return (
        <div className="loader" >
            <img className="loader__logo" src="https://itechart-by.s3.amazonaws.com/storage/static/svg/logo.svg" alt="Loading"/>
            <FormLoader />
        </div>
    );
};

export default React.memo(Loader);
