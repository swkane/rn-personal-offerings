import React from "react";
import { Text, View, Image, FlatList, StyleSheet } from "react-native";
import { Card, ListItem, Button } from "react-native-elements";

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
            <FlatList
              data={this.state.data}
              renderItem={({ item }) => (
                <Card
                  title={item.attributes.title}
                  image={{ uri: item.attributes.image }}
                >
                  <Text>{item.attributes.description}</Text>
                </Card>
              )}
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
