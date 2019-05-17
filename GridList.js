import React from 'react';
import { View, Text } from 'react-native';
import GridView from 'react-native-gridview';


const itemsPerRow = 2;

const GridList = ({ data }) => {
  const { trackName } = data
return (
<GridView
  data={data}
  itemsPerRow={itemsPerRow}
  renderItem={() => (
      <View style={{ flex: 1, backgroundColor: '#8F8', borderWidth: 1 }}>
        <Text>{trackName}</Text>
      </View>
    )}
/>
);
}
export default GridList;
