import React from 'react';
import {StyleSheet, View} from 'react-native';
import {MapView} from 'expo';
import {Basket} from '../../icons/Basket';

export const MapViewWrapper = props => {
  return (
    <MapView
      style={props.style}
      region={props.region}
      showsUserLocation
      mapType="hybrid"
    >
      {props.markers.map(details => {
        return (
          <MapView.Marker
            coordinate={details.marker}
            key={details.marker.latitude}
          >
            {details.basket ? <Basket width={24} height={24} /> : null}
          </MapView.Marker>
        );
      })}
    </MapView>
  );
};
