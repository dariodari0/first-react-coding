import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Logo from './Logo';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Logo />, document.getElementById('root'));
registerServiceWorker();
