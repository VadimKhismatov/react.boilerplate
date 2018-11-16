import './header.scss';
import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="header_component">
        <div className="container">
          <h1>Hello world!</h1>
        </div>
      </section>
    );
  }
}

export default Header;
