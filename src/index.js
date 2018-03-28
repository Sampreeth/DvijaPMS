import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Reg from './registration/Registration.jsx';
ReactDOM.render(<Reg />, document.getElementById('root'));
registerServiceWorker();
