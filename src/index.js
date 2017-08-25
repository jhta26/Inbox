import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<InboxPage
messages={messages}
items={items}
selectedMessageIds={[1,4,5]}

 />, document.getElementById('root'));

