//CSS
import '../scss/base/main.scss';

import React from 'react';
import { render } from 'react-dom';

const App = () => {
    return (
        <div>
            <h3>Our Application Is Alive</h3>
            <p>This isn’t reality. This — is fantasy.</p>
        </div>
    );
}

render(<App />, document.getElementById('app'));