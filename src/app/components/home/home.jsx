import React from 'react';
import Header from '../header/header';
class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        {/* header start  */}
        <Header />
        {/* header end  */}
      </>
    );
  }
}

export default Home;
