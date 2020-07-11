import React from 'react';
import PropTypes from 'prop-types';

import './Welcome.css';

const Welcome = ({ name, description }) => {
    return (
        <section className="welcome-msg-wrapper">
            <p className="name">Welcome <strong>{name}</strong></p>
            <p className="welcome-message">{description}</p>
        </section>
    );
}

Welcome.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

Welcome.defaultProps = {
    name: '',
    description: ''
}


export default Welcome;
