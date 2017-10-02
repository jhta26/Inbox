import React, { Component } from 'react';
import './App.css';
import setupStore from './redux/setupStore';
import { Provider } from 'react-redux';
import InboxPageContainer from './redux/containers/InboxPageContainer';

const store = setupStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <InboxPageContainer />
      </Provider>
    );
  }
}
