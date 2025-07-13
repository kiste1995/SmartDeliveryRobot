import * as React from "react";
import { ScrollView, Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import DeliveryDetails from "./DeliveryDetails";
import Mynauitelephonecallsolid from "../assets/mynauitelephonecallsolid.svg";
import BUTTON1 from "./BUTTON1";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const Call = () => {
  return (
    <ScrollView
      style={styles.call}
      contentContainerStyle={styles.callScrollViewContent}
    >
      <View style={[styles.callInner, styles.callInnerLayout]}>
        <View style={[styles.frameParent, styles.callInnerLayout]}>
          <View style={styles.wrapper}>
            <Text style={styles.text}>호출하기</Text>
          </View>
          <View style={[styles.img6Wrapper, styles.frameGroupLayout]}>
            <Image
              style={styles.img6Icon}
              contentFit="cover"
              source={require("../assets/img6.png")}
            />
          </View>
          <View style={[styles.frameGroup, styles.frameGroupLayout]}>
            <View style={styles.zetabotWrapper}>
              <Text style={styles.zetabot}>ZetaBot</Text>
            </View>
            <Text style={styles.text1}>배달 정보 입력</Text>
          </View>
          <DeliveryDetails />
          <View style={[styles.button59Wrapper, styles.button59Layout]}>
            <Pressable style={[styles.button59, styles.buttonFlexBox]}>
              <Mynauitelephonecallsolid
                style={styles.mynauitelephoneCallSolidIcon}
                width={24}
                height={24}
              />
              <Text style={styles.text2}>로봇 호출하기</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  callScrollViewContent: {
    flexDirection: "column",
    paddingTop: 35,
    alignItems: "flex-end",
    justifyContent: "flex-start",
    gap: 63,
    height: 812,
  },
  callInnerLayout: {
    height: 658,
    zIndex: null,
  },
  frameGroupLayout: {
    width: 221,
    zIndex: null,
  },
  button59Layout: {
    height: 45,
    flexDirection: "row",
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  spanFlexBox: {
    height: 18,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  textTypo: {
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 18,
    fontSize: 12,
    height: 18,
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    width: 77,
    fontSize: FontSize.size_20,
    lineHeight: 42,
    color: Color.colorGray200,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    height: 42,
  },
  wrapper: {
    width: 202,
    paddingLeft: 128,
    height: 42,
    flexDirection: "row",
    zIndex: null,
  },
  img6Icon: {
    width: 111,
    height: 125,
  },
  img6Wrapper: {
    paddingLeft: 110,
    height: 125,
    flexDirection: "row",
  },
  zetabot: {
    width: 67,
    fontSize: FontSize.size_18,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.colorGray100,
    lineHeight: 21,
    letterSpacing: 0.1,
    height: 21,
    textAlign: "left",
  },
  zetabotWrapper: {
    width: 198,
    paddingLeft: 134,
    height: 21,
    flexDirection: "row",
    zIndex: null,
  },
  text1: {
    width: 224,
    height: 22,
    fontSize: 17,
    lineHeight: 22,
    color: Color.colorRoyalblue200,
    letterSpacing: 0.1,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  frameGroup: {
    height: 56,
    gap: 13,
  },
  mynauitelephoneCallSolidIcon: {},
  text2: {
    width: 96,
    fontSize: FontSize.size_16,
    fontWeight: "800",
    fontFamily: FontFamily.robotoBlack,
    color: Color.colorWhite,
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: {
      width: 0,
      height: 1,
    },
    textShadowRadius: 2,
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    lineHeight: 21,
    height: 21,
  },
  button59: {
    width: 301,
    shadowColor: Color.colorGray300,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 1,
    borderRadius: Border.br_4,
    backgroundColor: Color.colorRoyalblue100,
    overflow: "hidden",
    paddingHorizontal: Padding.p_14,
    paddingVertical: 7,
    gap: 15,
    height: 45,
    flexDirection: "row",
  },
  button59Wrapper: {
    width: 316,
    paddingLeft: Padding.p_15,
  },
  frameParent: {
    width: 332,
    gap: 17,
  },
  callInner: {
    width: 353,
    justifyContent: "flex-end",
    paddingRight: 21,
    flexDirection: "row",
  },
  call: {
    flex: 1,
    maxWidth: 375,
    backgroundColor: Color.colorWhite,
    width: 375,
  },
});

export default Call;
