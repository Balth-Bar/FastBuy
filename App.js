import React, { useContext } from 'react';
import { NativeBaseProvider } from 'native-base';
import AppState, { AppContext } from './context/appContext/appState';
import { Navigator } from './src/views/componets/Navigator';


const App = () => {

  return (
    <>
      <NativeBaseProvider>
        <AppState>
          <Navigator />
        </AppState>
      </NativeBaseProvider>
    </>
  );
};


export default App;
