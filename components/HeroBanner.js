import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import food from "../assets/bitmap.jpg";

export default (HeroBanner = () => (
  <View style={styles.container}>
    <Image source={food} />
    <Text style={styles.text}>share food with neighbors</Text>
  </View>
));

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  text: {
    flex: 1,
    fontSize: 30,
    textAlign: "right",
    fontFamily: "roboto-bold",
    paddingRight: "3%"
  }
});
