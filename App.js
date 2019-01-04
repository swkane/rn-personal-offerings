import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Font } from "expo";

import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";

export default class App extends React.Component {
  state = {
    fontLoaded: false
  };
  async componentDidMount() {
    await Font.loadAsync({
      roboto: require("./assets/fonts/Roboto-Regular.ttf"),
      "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf")
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    return (
      <View>
        {this.state.fontLoaded ? (
          <React.Fragment>
            <Header />
            <HeroBanner />
          </React.Fragment>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%"
  }
});
