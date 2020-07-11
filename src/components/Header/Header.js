import React from 'react';
import PropTypes from 'prop-types';

import './Header.css';

const Header = ({ logo }) => {
    return (
        <header className="app-header">
            <img src={logo} alt="Hesus" className="app-logo" />
            <input type="text" placeholder="Search..." className="search-input" />
        </header>
    );
}

Header.propTypes = {
    logo: PropTypes.string.isRequired
};

export default Header;
