import { StatusBar } from "expo-status-bar";
import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Button from "./Button";
import { connect } from "react-redux";
import {
  pressNum,
  enter,
  operation,
  clear,
  swap,
  toggleNegative,
} from "./modules";
import { bindActionCreators } from "redux";
import { color } from "react-native-reanimated";
import { TouchableOpacity } from "react-native";

const App = ({
  calculatorState: { stack, inputState },
  operationAction,
  pressNumWithDispatch,
  enterAction,
  clearAction,
  swapAction,
  toggleNegativeAction,
}) => (
  <View style={styles.container}>
    <View style={styles.top}>
      <TouchableOpacity
        style={styles.bottomBorder}
        onPress={() => toggleNegativeAction(2)}
      >
        <Text style={styles.append}>{stack[2] || 0}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bottomBorder}
        onPress={() => toggleNegativeAction(1)}
      >
        <Text style={styles.append}>{stack[1] || 0}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bottomBorder}
        onPress={() => toggleNegativeAction(0)}
      >
        <Text style={styles[inputState]}>{stack[0] || 0}</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.bottom}>
      <View style={styles.row}>
        <Button text="clear" onPress={clearAction} />
        <Button text="pow" onPress={operationAction} />
        <Button text="swap" onPress={swapAction} />
        <Button text="/" onPress={operationAction} />
      </View>
      <View style={styles.row}>
        <Button text="9" onPress={pressNumWithDispatch} />
        <Button text="8" onPress={pressNumWithDispatch} />
        <Button text="7" onPress={pressNumWithDispatch} />
        <Button text="x" onPress={operationAction} />
      </View>
      <View style={styles.row}>
        <Button text="6" onPress={pressNumWithDispatch} />
        <Button text="5" onPress={pressNumWithDispatch} />
        <Button text="4" onPress={pressNumWithDispatch} />
        <Button text="-" onPress={operationAction} />
      </View>
      <View style={styles.row}>
        <Button text="3" onPress={pressNumWithDispatch} />
        <Button text="2" onPress={pressNumWithDispatch} />
        <Button text="1" onPress={pressNumWithDispatch} />
        <Button text="+" onPress={operationAction} />
      </View>
      <View style={styles.row}>
        <Button text="0" onPress={pressNumWithDispatch} />
        <Button text="." onPress={pressNumWithDispatch} />
        <Button text="enter" onPress={enterAction} special />
      </View>
    </View>
  </View>
);

const baseNumber = {
  backgroundColor: "#424242",
  textAlign: "right",
  padding: 10,
  fontSize: 30,
  fontWeight: "bold",
  borderBottomWidth: 1,
  borderColor: "#fff",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomBorder: {
    borderBottomWidth: 1,
    borderColor: "#fff",
  },
  top: {
    paddingTop: Platform.onPress === "ios" ? 30 : 20,
  },
  bottom: {
    flex: 1,
    backgroundColor: "red",
  },
  number: {
    color: "#fdfdfd",
    ...baseNumber,
  },
  append: {
    color: "#fff",
    ...baseNumber,
  },
  replace: {
    color: "#2E71E5",
    ...baseNumber,
  },
  push: {
    color: "#9BC23C",
    ...baseNumber,
  },
  row: {
    flex: 1,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#fff",
  },
});

export default connect(
  (state) => ({ calculatorState: state }),
  (dispatch) =>
    bindActionCreators(
      {
        pressNumWithDispatch: pressNum,
        enterAction: enter,
        operationAction: operation,
        clearAction: clear,
        swapAction: swap,
        toggleNegativeAction: toggleNegative,
      },
      dispatch
    )
)(App);
