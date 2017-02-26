import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './index.css';

injectTapEventPlugin();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
