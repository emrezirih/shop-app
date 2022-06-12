import 'react-native-gesture-handler';
import React from 'react';
import Navigation from './navigations';
import { Provider } from 'react-redux';
import { store } from './state';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
