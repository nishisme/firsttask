import React from 'react';
import { Text, View } from 'react-native';
import GridView from 'react-native-gridview';

const itemsPerRow = 2;
const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;
  return (
    <GridView
      data={album}
      itemsPerRow={itemsPerRow}
      renderItem={(trackName, collectionName, collectionArtistName) => {
        return (
          <View style={{ flex: 1, backgroundColor: '#8F8', borderWidth: 1 }}>
            <Text>{`${trackName} (${collectionName}-${collectionArtistName})`}</Text>
          </View>
        );
      }}
    />

  );
};

export default AlbumDetail;
