import './header.scss';
import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="header_component">
        <div className="container">
          <div className="content">Header</div>
        </div>
      </header>
    );
  }
}

export default Header;
