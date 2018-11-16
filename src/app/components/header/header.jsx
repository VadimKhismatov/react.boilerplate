import './header.scss';
import React from 'react';

// images
import one from '../../../images/one.png';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="header_component">
        <div className="container">
          <div className="content">Header</div>
          <img src={one} alt="icon.png" />
        </div>
      </header>
    );
  }
}

export default Header;
