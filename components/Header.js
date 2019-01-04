import React from "react";
import { Header } from "react-native-elements";

export default () => (
  <Header
    leftComponent={{ icon: "menu", color: "#fff" }}
    centerComponent={{
      text: "offerings",
      style: { color: "#fff", fontSize: 20 }
    }}
    backgroundColor={"#3fb542"}
  />
);
