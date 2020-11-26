import React from 'react';
import Weather from './Weather/Weather';
import {Provider} from 'react-redux';
import {store,persistor} from './stroe';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
         <Weather> </Weather>
      </PersistGate>
    </Provider>
  );
};
export default App;




