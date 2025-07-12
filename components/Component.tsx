import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet } from "react-native";
import { FontFamily, Color } from "../GlobalStyles";

export type ComponentType = {
  style?: StyleProp<ViewStyle>;
};

const Component = ({ style }: ComponentType) => {
  return <Text style={[styles.text, style]}>보내기</Text>;
};

const styles = StyleSheet.create({
  text: {
    width: 37,
    height: 18,
    fontSize: 12,
    lineHeight: 18,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorRoyalblue100,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Component;
