import React from "react";
import { Text, View, Image, FlatList, StyleSheet } from "react-native";

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
        <Text style={styles.title}>Nearby</Text>
        {this.state.isLoading ? (
          <Text>Loading...</Text>
        ) : (
          <View>
            <Text>{this.state.data[0].attributes.title}</Text>
            <FlatList
              data={this.state.data}
              renderItem={({ item }) => <Text>{item.attributes.title}</Text>}
              keyExtractor={item => item.id}
            />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "roboto-bold",
    fontSize: 24
  }
});
