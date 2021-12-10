import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ name }) => {
  const headerStyle = {
    backgroundColor: 'rgba(0,0,0,0.4)',
    color: '#ff6a95',
  };
  return (
    <header style={headerStyle}>
      <div className='container'>
        <h2>{name}</h2>
      </div>
    </header>
  );
};

Header.defaultProps = {
  name: 'Feedback User Interface',
};
Header.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Header;
