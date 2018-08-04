import React from 'react';
import Header from '../header/header';
class Home extends React.Component {

    constructor(props) {
        super(props);
    };


    render() {
        return (
            <div className='home_page'>
                {/* header start  */}
                <Header />
                {/* header end  */}
            </div>
        );
    };

};

export default Home;
