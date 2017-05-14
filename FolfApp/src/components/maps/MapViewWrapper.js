import React from 'react';
import {StyleSheet} from 'react-native';
import {MapView} from 'expo';

export const MapViewWrapper = props => {
  return (
    <MapView style={props.style} region={props.region}>
      <MapView.Marker coordinate={props.marker} />
    </MapView>
  );
};
