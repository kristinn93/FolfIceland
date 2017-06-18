import React from 'react';
import {StyleSheet, View} from 'react-native';
import {MapView} from 'expo';
import {Basket} from '../../icons/Basket';

export const MapViewWrapper = props => {
  console.log(Basket);
  return (
    <MapView style={props.style} region={props.region} showsUserLocation>
      {props.markers.map(marker =>
        <MapView.Marker coordinate={marker} key={marker.latitude}>
          {/*{marker.basket === undefined ? <View><Basket /></View> : null}*/}
        </MapView.Marker>
      )}
    </MapView>
  );
};
