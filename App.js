import React from 'react';
import { View } from 'react-native';
import Header from './Header';
import GridList from './GridList';
import data from './data.json';

console.log(data);
const App = () => (
  <View>
  <Header headerText={'GrifdsdView'} />
  <GridList data={data} />
  </View>
);

export default App;
