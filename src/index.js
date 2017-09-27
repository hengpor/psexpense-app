import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './components/login/LoginPage';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path="/app" component={App} />
            <Route path="/login" component={Login} />
        </div>
    </BrowserRouter>
    ,
    document.getElementById('root')
);
registerServiceWorker();
