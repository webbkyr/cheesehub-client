import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './store'
import CheeseList from './components/cheese-list'
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'

ReactDOM.render(
<Provider store={store}>
<CheeseList />
</Provider>, document.getElementById('root'));
registerServiceWorker();
