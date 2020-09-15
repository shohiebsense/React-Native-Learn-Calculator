import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const baseContainer = {
  backgroundColor: "#fafafa",
  alignItems: "center",
  justifyContent: "center",
  borderRightWidth: 1,
  borderColor: "#fff",
};

const baseText = {
  fontSize: 36,
};

const changeColor = () => {
  this.setState({
    backgroundColor: "red",
    backgroundColor2: "black",
  });
};

const changeColor2 = () => {
  this.setState({
    backgroundColor: "black",
    backgroundColor2: "red",
  });
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...baseContainer,
    backgroundColor: "#fafafa",
  },
  text: {
    ...baseText,
  },
  specialContainer: {
    flex: 2,
    ...baseContainer,
    backgroundColor: "#9bc23c",
    color: "#fff",
  },
  specialText: {
    ...baseText,
    color: "#fff",
  },
});

const Button = ({ text, special, onPress }) => (
  <TouchableOpacity
    //onPress={onPress}
    //onPress={() => this.changeColor()}
    onPress={() => onPress(text)}
    style={special ? styles.specialContainer : styles.container}
    activeOpacity={0.8}
  >
    <Text style={special ? styles.specialText : styles.text}>{text}</Text>
  </TouchableOpacity>
);

export default Button;
