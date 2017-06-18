import React from "react";
import { View, Text } from "react-native";
import {
  app as ScoreView
} from "../../../lib/js/folfApp/src/components/play/score";

export default class Score extends React.Component {
  render() {
    return <View><ScoreView name="Kristinn" /></View>;
  }
}
