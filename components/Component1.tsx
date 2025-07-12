import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet } from "react-native";
import { FontFamily, Color } from "../GlobalStyles";

export type Component1Type = {
  style?: StyleProp<ViewStyle>;
};

const Component1 = ({ style }: Component1Type) => {
  return <Text style={[styles.text, style]}>받기</Text>;
};

const styles = StyleSheet.create({
  text: {
    width: 26,
    height: 18,
    fontSize: 12,
    lineHeight: 18,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorDimgray,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Component1;
