import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontFamily, Padding, Border, FontSize } from "../GlobalStyles";

const FrameComponent11 = () => {
  return (
    <View style={styles.personalInformationWrapper}>
      <View style={styles.personalInformation}>
        <View style={styles.personalInformation1}>
          <View style={styles.parent}>
            <Text style={styles.textTypo2}>발신자 정보</Text>
            <Text style={[styles.text1, styles.textTypo2]}>발신자 정보</Text>
          </View>
        </View>
        <View style={styles.accountNumberWrapper}>
          <View style={[styles.accountNumber, styles.emailSpaceBlock]}>
            <View style={styles.container} />
            <Text style={[styles.text2, styles.textTypo1]}>섬명</Text>
            <Text style={[styles.text3, styles.textTypo]}>김철수</Text>
          </View>
        </View>
        <View style={styles.accountNumberWrapper}>
          <View style={styles.username}>
            <View style={styles.container} />
            <Text style={[styles.text4, styles.textTypo1]}>부서</Text>
            <Text style={[styles.text5, styles.textTypo]}>총무과</Text>
          </View>
        </View>
        <View style={styles.accountNumberWrapper}>
          <View style={[styles.email, styles.emailSpaceBlock]}>
            <View style={styles.container} />
            <Text style={[styles.text6, styles.textTypo1]}>전화번호</Text>
            <Text style={[styles.phoneNumberValue, styles.textTypo]}>
              010 - 1234 - 1234
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo2: {
    textAlign: "left",
    color: Color.colorRoyalblue200,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    lineHeight: 22,
    letterSpacing: 0.1,
    fontSize: 17,
    width: 224,
    height: 22,
  },
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
    color: Color.colorRoyalblue100,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    lineHeight: 21,
    fontSize: FontSize.size_12,
    textAlign: "left",
    zIndex: 1,
  },
  textTypo: {
    textAlign: "right",
    color: Color.colorMidnightblue,
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 21,
    fontSize: FontSize.size_12,
    zIndex: 1,
  },
  text1: {
    marginLeft: -224,
  },
  parent: {
    height: 22,
    width: 221,
    flexDirection: "row",
    zIndex: null,
  },
  personalInformation1: {
    zIndex: 1,
    height: 22,
    width: 221,
    flexDirection: "row",
  },
  container: {
    display: "none",
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_10,
    width: 331,
    height: 40,
  },
  text2: {
    width: 26,
    height: 22,
  },
  text3: {
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
  },
  text4: {
    height: 19,
    width: 60,
  },
  text5: {
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
  text6: {
    width: 48,
    height: 22,
  },
  phoneNumberValue: {
    width: 97,
    height: 22,
  },
  email: {
    gap: 148,
  },
  personalInformation: {
    height: 163,
    gap: 6,
    width: 332,
  },
  personalInformationWrapper: {
    width: 353,
    height: 167,
    paddingBottom: 4,
    paddingLeft: 21,
    flexDirection: "row",
    zIndex: null,
  },
});

export default FrameComponent11;
