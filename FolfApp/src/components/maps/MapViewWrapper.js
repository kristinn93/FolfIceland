import React from 'react';
import {StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

export const MapViewWrapper = props => {
  console.log(props);
  return (
    <MapView style={props.style} region={props.region}>
      {props.markers.map(marker => (
        <MapView.Marker coordinate={marker.latlng} />
      ))}
    </MapView>
  );
};
