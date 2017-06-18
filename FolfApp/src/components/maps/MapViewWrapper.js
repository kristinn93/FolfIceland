import React from "react";
import { StyleSheet } from "react-native";
import { MapView } from "expo";

export const MapViewWrapper = props => {
  return (
    <MapView
      mapType="hybrid"
      style={props.style}
      region={props.region}
      showsUserLocation
    >
      {props.markers.map(marker => (
        <MapView.Marker coordinate={marker} key={marker.latitude} />
      ))}
    </MapView>
  );
};
