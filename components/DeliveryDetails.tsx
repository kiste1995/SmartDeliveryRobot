import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { RadioGroup, Radio } from "@ui-kitten/components";
import {
  Padding,
  Color,
  Border,
  FontSize,
  FontFamily,
  Gap,
} from "../GlobalStyles";

const DeliveryDetails = () => {
  const [frameRadioselectedIndex, setFrameRadioselectedIndex] = useState(-1);
  const [frameRadio1selectedIndex, setFrameRadio1selectedIndex] = useState(-1);

  return (
    <View style={styles.deliveryDetails}>
      <View style={[styles.accountNumber, styles.accountLayout]}>
        <View style={styles.container} />
        <Text style={styles.text}>배달 위치</Text>
        <RadioGroup
          style={[styles.parent, styles.groupLayout]}
          selectedIndex={frameRadioselectedIndex}
          onChange={setFrameRadioselectedIndex}
        >
          <Radio style={styles.radio}>
            <Text style={styles.frameRadioText}> 기획조정실</Text>
          </Radio>
          <Radio style={styles.radio}>
            <Text style={styles.frameRadioText}> 재난안전실</Text>
          </Radio>
          <Radio style={styles.radio}>
            <Text style={styles.frameRadioText}> 행정국</Text>
          </Radio>
        </RadioGroup>
      </View>
      <TextInput
        style={styles.deliveryDetailsChild}
        placeholder="박장수"
        placeholderTextColor="#5164bf"
      />
      <View style={[styles.accountNumber1, styles.accountLayout]}>
        <View style={styles.container} />
        <Text style={styles.text}>물품 종류</Text>
        <RadioGroup
          style={[styles.group, styles.groupLayout]}
          selectedIndex={frameRadio1selectedIndex}
          onChange={setFrameRadio1selectedIndex}
        >
          <Radio style={styles.radio}>
            <Text style={styles.frameRadio1Text}> 서류</Text>
          </Radio>
          <Radio style={styles.radio}>
            <Text style={styles.frameRadio1Text}> 비품</Text>
          </Radio>
          <Radio style={styles.radio}>
            <Text style={styles.frameRadio1Text}> 기타</Text>
          </Radio>
        </RadioGroup>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameRadioText: {
    fontFamily: "Roboto-Regular",
    fontSize: 12,
    color: "#374151",
  },
  frameRadio1Text: {
    fontFamily: "Roboto-Regular",
    fontSize: 12,
    color: "#374151",
  },
  accountLayout: {
    paddingRight: Padding.p_6,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_10,
    height: 126,
    width: 331,
  },
  groupLayout: {
    height: 84,
    flexDirection: "row",
  },
  container: {
    display: "none",
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_10,
    height: 126,
    width: 331,
  },
  text: {
    width: 52,
    height: 21,
    fontSize: FontSize.size_12,
    lineHeight: 21,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.colorRoyalblue100,
    textAlign: "left",
    zIndex: 1,
  },
  radio: {
    marginTop: 0,
    marginBottom: 0,
  },
  parent: {
    width: 304,
    paddingLeft: Padding.p_15,
    flexDirection: "row",
  },
  accountNumber: {
    paddingLeft: 21,
    paddingTop: 9,
    paddingBottom: Padding.p_12,
  },
  deliveryDetailsChild: {
    height: 55,
    paddingLeft: Padding.p_1,
    flexDirection: "row",
    width: 332,
  },
  group: {
    width: 303,
    paddingLeft: Padding.p_14,
    flexDirection: "row",
  },
  accountNumber1: {
    paddingLeft: Padding.p_22,
    paddingTop: 7,
    paddingBottom: Padding.p_8,
    gap: Gap.gap_6,
  },
  deliveryDetails: {
    height: 321,
    zIndex: null,
    gap: 7,
    width: 332,
  },
});

export default DeliveryDetails;
