import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import {
  Padding,
  Color,
  Border,
  FontFamily,
  FontSize,
  Gap,
} from "../GlobalStyles";

const FrameComponent1 = () => {
  return (
    <View style={styles.accountInfoWrapper}>
      <View style={styles.accountInfo}>
        <View style={[styles.accountNumber, styles.emailSpaceBlock]}>
          <View style={styles.container} />
          <Text style={[styles.text, styles.textTypo1]}>성명</Text>
          <Text style={[styles.text1, styles.textTypo]}>박장수</Text>
        </View>
        <View style={styles.username}>
          <View style={styles.container} />
          <Text style={[styles.text2, styles.textTypo1]}>부서</Text>
          <Text style={[styles.text3, styles.textTypo]}>인사과</Text>
        </View>
        <View style={[styles.email, styles.emailSpaceBlock]}>
          <View style={styles.container} />
          <Text style={[styles.text4, styles.textTypo1]}>전화번호</Text>
          <Text style={[styles.text5, styles.textTypo]}>010 - 5678 - 5678</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  emailSpaceBlock: {
    paddingBottom: Padding.p_8,
    paddingTop: 9,
    paddingRight: Padding.p_20,
    paddingLeft: 21,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_10,
    height: 38,
    width: 331,
    flexDirection: "row",
  },
  textTypo1: {
    zIndex: 1,
    textAlign: "left",
    color: Color.colorRoyalblue100,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    lineHeight: 21,
    fontSize: FontSize.size_12,
  },
  textTypo: {
    textAlign: "right",
    color: Color.colorMidnightblue,
    fontFamily: FontFamily.robotoRegular,
    zIndex: 1,
    lineHeight: 21,
    fontSize: FontSize.size_12,
  },
  container: {
    display: "none",
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_10,
    height: 38,
    width: 331,
  },
  text: {
    width: 26,
    height: 21,
  },
  text1: {
    width: 37,
    height: 21,
  },
  accountNumber: {
    gap: 230,
  },
  text2: {
    height: 18,
    width: 60,
  },
  text3: {
    height: 19,
    width: 75,
  },
  username: {
    paddingTop: 8,
    paddingBottom: Padding.p_10,
    gap: 158,
    paddingRight: Padding.p_20,
    paddingLeft: 21,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_10,
    height: 38,
    width: 331,
    flexDirection: "row",
  },
  text4: {
    width: 48,
    height: 21,
  },
  text5: {
    width: 97,
    height: 21,
  },
  email: {
    gap: 148,
  },
  accountInfo: {
    height: 126,
    gap: Gap.gap_6,
    width: 331,
    zIndex: null,
  },
  accountInfoWrapper: {
    width: 332,
    height: 133,
    paddingLeft: Padding.p_1,
    paddingBottom: 7,
    flexDirection: "row",
    zIndex: null,
  },
});

export default FrameComponent1;
