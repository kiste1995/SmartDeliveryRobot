import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Padding, Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const FrameComponent2 = () => {
  return (
    <View style={styles.personalInformationWrapper}>
      <View style={styles.personalInformation}>
        <Text style={styles.text}>수신자 정보</Text>
        <View style={styles.accountNumberWrapper}>
          <View style={[styles.accountNumber, styles.emailSpaceBlock]}>
            <View style={styles.container} />
            <Text style={[styles.text1, styles.textTypo1]}>성명</Text>
            <Text style={[styles.text2, styles.textTypo]}>박장수</Text>
          </View>
        </View>
        <View style={styles.accountNumberWrapper}>
          <View style={styles.username}>
            <View style={styles.container} />
            <Text style={[styles.text3, styles.textTypo1]}>부서</Text>
            <Text style={[styles.text4, styles.textTypo]}>인사과</Text>
          </View>
        </View>
        <View style={styles.accountNumberWrapper}>
          <View style={[styles.email, styles.emailSpaceBlock]}>
            <View style={styles.container} />
            <Text style={[styles.text5, styles.textTypo1]}>전화번호</Text>
            <Text style={[styles.text6, styles.textTypo]}>
              010 - 5678 - 5678
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  emailSpaceBlock: {
    paddingBottom: 8,
    paddingRight: Padding.p_20,
    paddingTop: 9,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_10,
    width: 331,
    height: 40,
    paddingLeft: 21,
    flexDirection: "row",
  },
  textTypo1: {
    zIndex: 1,
    color: Color.colorRoyalblue100,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    lineHeight: 21,
    fontSize: FontSize.size_12,
    textAlign: "left",
  },
  textTypo: {
    textAlign: "right",
    color: Color.colorMidnightblue,
    fontFamily: FontFamily.robotoRegular,
    zIndex: 1,
    lineHeight: 21,
    fontSize: FontSize.size_12,
  },
  text: {
    width: 224,
    fontSize: 17,
    letterSpacing: 0.1,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    color: Color.colorRoyalblue200,
    textAlign: "left",
    height: 22,
  },
  container: {
    display: "none",
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_10,
    width: 331,
    height: 40,
  },
  text1: {
    width: 26,
    height: 22,
  },
  text2: {
    width: 37,
    height: 22,
  },
  accountNumber: {
    gap: 230,
  },
  accountNumberWrapper: {
    paddingLeft: Padding.p_1,
    height: 40,
    width: 332,
    flexDirection: "row",
    zIndex: null,
  },
  text3: {
    height: 19,
    width: 60,
  },
  text4: {
    height: 20,
    width: 75,
  },
  username: {
    paddingBottom: 10,
    gap: 158,
    paddingRight: Padding.p_20,
    paddingTop: 9,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_10,
    width: 331,
    height: 40,
    paddingLeft: 21,
    flexDirection: "row",
  },
  text5: {
    width: 48,
    height: 22,
  },
  text6: {
    width: 97,
    height: 22,
  },
  email: {
    gap: 148,
  },
  personalInformation: {
    height: 164,
    gap: 6,
    width: 332,
  },
  personalInformationWrapper: {
    width: 353,
    height: 167,
    paddingBottom: 3,
    paddingLeft: 21,
    flexDirection: "row",
    zIndex: null,
  },
});

export default FrameComponent2;
