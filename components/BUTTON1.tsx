import React, { useMemo } from "react";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { FontFamily, Color } from "../GlobalStyles";

export type BUTTON1Type = {
  marginWrap?: React.ReactNode;
  prop?: string;

  /** Style props */
  sPAN68Width?: number | string;
  textWidth?: number | string;
  textColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const BUTTON1 = ({
  marginWrap,
  sPAN68Width,
  prop,
  textWidth,
  textColor,
}: BUTTON1Type) => {
  const sPAN68Style = useMemo(() => {
    return {
      ...getStyleValue("width", sPAN68Width),
    };
  }, [sPAN68Width]);

  const text1Style = useMemo(() => {
    return {
      ...getStyleValue("width", textWidth),
      ...getStyleValue("color", textColor),
    };
  }, [textWidth, textColor]);

  return (
    <View style={styles.button65}>
      <View>{marginWrap && marginWrap}</View>
      <View style={[styles.span68, styles.textFlexBox, sPAN68Style]}>
        <Text style={[styles.text, styles.textFlexBox, text1Style]}>
          {prop}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    height: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    width: 37,
    fontSize: 12,
    lineHeight: 18,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorRoyalblue100,
    textAlign: "center",
    display: "flex",
  },
  span68: {
    width: 34,
    flexDirection: "row",
  },
  button65: {
    width: 188,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BUTTON1;
