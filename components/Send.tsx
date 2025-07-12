import * as React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import Group2 from "../assets/group-2.svg";
import FrameComponent1 from "./FrameComponent1";
import Icbaselinelockopen from "../assets/icbaselinelockopen.svg";
import FrameComponent from "./FrameComponent";
import BUTTON1 from "./BUTTON1";
import Marginwrap1 from "../assets/marginwrap1.svg";
import Marginwrap2 from "../assets/marginwrap2.svg";
import {
  Padding,
  Border,
  Color,
  FontFamily,
  FontSize,
  Gap,
} from "../GlobalStyles";

const Send = () => {
  return (
    <ScrollView
      style={styles.send}
      contentContainerStyle={styles.sendScrollViewContent}
    >
      <View style={styles.sendInner}>
        <View style={styles.frameParent}>
          <View style={styles.frameWrapper}>
            <View style={[styles.frameGroup, styles.frameLayout1]}>
              <View style={[styles.frameContainer, styles.frameLayout]}>
                <View style={[styles.frameView, styles.frameLayout]}>
                  <View style={styles.wrapperGroup2Wrapper}>
                    <View style={styles.wrapperGroup2}>
                      <Group2 style={styles.wrapperGroup2Child} />
                    </View>
                  </View>
                  <Text style={styles.text}>배달하기</Text>
                </View>
              </View>
              <View style={styles.img6Parent}>
                <Image
                  style={styles.img6Icon}
                  contentFit="cover"
                  source={require("../assets/img6.png")}
                />
                <View style={[styles.frameParent1, styles.frameLayout1]}>
                  <View style={styles.zetabotWrapper}>
                    <Text style={styles.zetabot}>ZetaBot</Text>
                  </View>
                  <Text style={styles.text1}>수신자 정보</Text>
                </View>
              </View>
            </View>
          </View>
          <FrameComponent1 />
          <View
            style={[styles.button59Wrapper, styles.deliveryButtonSpaceBlock]}
          >
            <View style={[styles.button59, styles.buttonShadowBox]}>
              <Icbaselinelockopen
                style={styles.icbaselineLockOpenIcon}
                width={40}
                height={40}
              />
              <Text style={[styles.text2, styles.textTypo]}>문 열기</Text>
            </View>
          </View>
          <FrameComponent />
          <View style={[styles.deliveryButton, styles.buttonLayout]}>
            <View style={[styles.button591, styles.buttonLayout]}>
              <Text style={[styles.text3, styles.textTypo]}>배달 시작</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.div64}>
        <BUTTON1
          marginWrap={<Marginwrap1 width={18} height={28} />}
          prop="보내기"
        />
        <BUTTON1
          marginWrap={<Marginwrap2 width={18} height={28} />}
          sPAN68Width={23}
          prop="받기"
          textWidth={26}
          textColor="#4b5563"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  sendScrollViewContent: {
    flexDirection: "column",
    paddingLeft: 1,
    paddingTop: 35,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 65,
    height: 812,
  },
  frameLayout1: {
    gap: 13,
    width: 221,
    zIndex: null,
  },
  frameLayout: {
    height: 46,
    zIndex: null,
    flexDirection: "row",
  },
  deliveryButtonSpaceBlock: {
    paddingLeft: Padding.p_16,
    width: 317,
  },
  buttonShadowBox: {
    paddingVertical: 7,
    paddingHorizontal: Padding.p_14,
    borderRadius: Border.br_4,
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: Color.colorGray300,
    width: 301,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  textTypo: {
    textShadowRadius: 2,
    textShadowOffset: {
      width: 0,
      height: 1,
    },
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.robotoBlack,
    fontWeight: "800",
    fontSize: FontSize.size_16,
    lineHeight: 21,
    height: 21,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  buttonLayout: {
    height: 41,
    flexDirection: "row",
  },
  wrapperGroup2Child: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    position: "absolute",
    left: 0,
    top: 4,
    transform: [
      {
        scale: 7.349,
      },
    ],
  },
  wrapperGroup2: {
    justifyContent: "center",
    display: "flex",
    height: 42,
    alignItems: "center",
    width: 63,
  },
  wrapperGroup2Wrapper: {
    paddingTop: Padding.p_4,
    width: 63,
    height: 46,
    zIndex: null,
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
  frameView: {
    width: 190,
    gap: 53,
  },
  frameContainer: {
    width: 203,
    paddingLeft: 13,
  },
  img6Icon: {
    width: 111,
    height: 125,
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
    zIndex: null,
    flexDirection: "row",
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
  frameParent1: {
    height: 56,
  },
  img6Parent: {
    height: 197,
    alignItems: "flex-end",
    gap: 16,
    width: 221,
    zIndex: null,
  },
  frameGroup: {
    height: 256,
  },
  frameWrapper: {
    width: 222,
    paddingLeft: Padding.p_1,
    height: 256,
    zIndex: null,
    flexDirection: "row",
  },
  icbaselineLockOpenIcon: {
    overflow: "hidden",
  },
  text2: {
    width: 52,
  },
  button59: {
    backgroundColor: Color.colorLightgreen,
    height: 71,
    gap: Gap.gap_1,
  },
  button59Wrapper: {
    height: 78,
    paddingBottom: 7,
    flexDirection: "row",
  },
  text3: {
    width: 66,
  },
  button591: {
    backgroundColor: Color.colorMediumslateblue,
    paddingVertical: 7,
    paddingHorizontal: Padding.p_14,
    borderRadius: Border.br_4,
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: Color.colorGray300,
    width: 301,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  deliveryButton: {
    paddingLeft: Padding.p_16,
    width: 317,
  },
  frameParent: {
    width: 333,
    gap: 19,
    zIndex: null,
    height: 656,
  },
  sendInner: {
    width: 353,
    paddingLeft: Padding.p_20,
    flexDirection: "row",
    height: 656,
  },
  div64: {
    borderStyle: "solid",
    borderColor: Color.colorGainsboro,
    borderTopWidth: 1,
    justifyContent: "space-between",
    paddingTop: Padding.p_1,
    gap: 0,
    zIndex: 1,
    overflow: "hidden",
    height: 56,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.colorWhite,
    width: 375,
  },
  send: {
    flex: 1,
    maxWidth: 375,
    backgroundColor: Color.colorWhite,
    width: 375,
  },
});

export default Send;
