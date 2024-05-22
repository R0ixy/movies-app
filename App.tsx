import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { Root } from './src/screens';


function App(): React.JSX.Element {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0F0F0F' }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#0F0F0F"
      />
      <Root />
    </SafeAreaView>
  );
}


export default App;
