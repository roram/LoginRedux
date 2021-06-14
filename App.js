import 'react-native-gesture-handler'
import React from 'react';
import RootNavigator from './app/src/navigation/index';
import Store from './app/redux/Store';
import {Provider} from 'react-redux';

const App = () =>{
  return(
    <Provider store={Store}>
      <RootNavigator />
    </Provider>
  );
}

export default App;
