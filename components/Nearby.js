import React from "react";
import { Text, View, Image } from "react-native";

const API_NEARBY =
  "http://offerings-academy-staging-api.herokuapp.com/offerings/nearby";

export default class Nearby extends React.Component {
  state = {
    isLoading: true
  };

  componentDidMount() {
    return fetch(API_NEARBY)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ isLoading: false, data: responseJson.data });
      });
  }

  render() {
    return (
      <View>
        <Text>Nearby</Text>
        {this.state.isLoading ? (
          <Text>Loading...</Text>
        ) : (
          <View>
            <Text>{this.state.data[0].attributes.title}</Text>
          </View>
        )}
      </View>
    );
  }
}
