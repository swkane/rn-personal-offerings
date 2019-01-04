import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header />
        <HeroBanner />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%"
  }
});
