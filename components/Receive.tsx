import * as React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import FrameComponent11 from "./FrameComponent11";
import FrameComponent2 from "./FrameComponent2";
import Icbaselinelockopen from "../assets/icbaselinelockopen.svg";
import Marginwrap11 from "../assets/marginwrap1.svg";
import BUTTON1 from "./BUTTON1";
import Marginwrap1 from "../assets/marginwrap1.svg";
import Marginwrap2 from "../assets/marginwrap2.svg";
import {
  Padding,
  Color,
  Border,
  FontFamily,
  FontSize,
  Gap,
} from "../GlobalStyles";

const Receive = () => {
  return (
    <ScrollView
      style={styles.receive}
      contentContainerStyle={styles.receiveScrollViewContent}
    >
      <View style={styles.receive1}>
        <View style={[styles.receiveInner, styles.receiveInnerSpaceBlock]}>
          <View style={styles.frameParent}>
            <View style={[styles.frameWrapper, styles.frameWrapperLayout]}>
              <View
                style={[
                  styles.buttonContainerParent,
                  styles.frameWrapperLayout,
                ]}
              >
                <View style={styles.buttonContainer}>
                  <View style={styles.rectangleParent}>
                    <View style={[styles.frameChild, styles.frameLayout]} />
                    <View style={[styles.rectangleGroup, styles.frameLayout]}>
                      <View style={[styles.frameItem, styles.frameLayout]} />
                      <Image
                        style={styles.arrowToTopIcon}
                        contentFit="cover"
                        source={require("../assets/arrow-to-top.png")}
                      />
                    </View>
                  </View>
                </View>
                <Text style={styles.text}>배달 받기</Text>
              </View>
            </View>
            <Image
              style={styles.img6Icon}
              contentFit="cover"
              source={require("../assets/img6.png")}
            />
          </View>
        </View>
        <View style={styles.zetabotWrapper}>
          <Text style={styles.zetabot}>ZetaBot</Text>
        </View>
        <FrameComponent11 />
        <FrameComponent2 />
        <View style={[styles.button59Wrapper, styles.receiveInnerSpaceBlock]}>
          <View style={styles.button59}>
            <Icbaselinelockopen
              style={styles.icbaselineLockOpenIcon}
              width={40}
              height={40}
            />
            <Text style={styles.text1}>문 열기</Text>
          </View>
        </View>
        <View style={styles.div63Wrapper}>
          <View style={[styles.div63, styles.divBorder]}>
            <View style={styles.div64}>
              <Marginwrap11
                style={styles.marginWrapIcon}
                width={16}
                height={28}
              />
              <View style={styles.marginWrap}>
                <View style={styles.p68Layout}>
                  <View style={[styles.p68, styles.p68FlexBox]}>
                    <Text style={[styles.text2, styles.textTypo]}>
                      문을 수동으로 꼭 닫아주세요!
                    </Text>
                    <Text style={[styles.text3, styles.textTypo]}>
                      문을 닫으면 자동으로 로봇이 복귀합니다.
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.div641, styles.p68FlexBox]}>
          <BUTTON1
            marginWrap={<Marginwrap1 width={18} height={28} />}
            sPAN68Width={34}
            prop="보내기"
            textWidth={37}
            textColor="#5164bf"
          />
          <BUTTON1
            marginWrap={<Marginwrap2 width={18} height={28} />}
            sPAN68Width={23}
            prop="받기"
            textWidth={26}
            textColor="#4b5563"
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  receiveScrollViewContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  receiveInnerSpaceBlock: {
    paddingBottom: Padding.p_3,
    flexDirection: "row",
  },
  frameWrapperLayout: {
    height: 46,
    flexDirection: "row",
    zIndex: null,
  },
  frameLayout: {
    height: 34,
    backgroundColor: Color.colorRoyalblue100,
    borderRadius: Border.br_20,
    width: 63,
  },
  divBorder: {
    borderStyle: "solid",
    overflow: "hidden",
  },
  p68FlexBox: {
    gap: 0,
    flexDirection: "row",
  },
  textTypo: {
    color: Color.colorSlateblue,
    lineHeight: 18,
    fontSize: 12,
    height: 18,
    display: "flex",
    alignItems: "center",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  frameChild: {
    top: 8,
    zIndex: 1,
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorRoyalblue100,
    borderRadius: Border.br_20,
  },
  frameItem: {
    display: "none",
  },
  arrowToTopIcon: {
    width: 24,
    height: 24,
    zIndex: 2,
  },
  rectangleGroup: {
    top: 0,
    paddingHorizontal: 19,
    paddingTop: 5,
    paddingBottom: 5,
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorRoyalblue100,
    borderRadius: Border.br_20,
    flexDirection: "row",
  },
  rectangleParent: {
    height: 42,
    width: 63,
  },
  buttonContainer: {
    paddingTop: Padding.p_4,
    width: 63,
    height: 46,
    zIndex: null,
  },
  text: {
    width: 82,
    fontSize: FontSize.size_20,
    lineHeight: 42,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    color: Color.colorGray200,
    textAlign: "left",
    height: 42,
  },
  buttonContainerParent: {
    width: 192,
    gap: 50,
  },
  frameWrapper: {
    justifyContent: "flex-end",
    paddingRight: Padding.p_16,
    width: 208,
  },
  img6Icon: {
    width: 111,
    height: 125,
  },
  frameParent: {
    height: 184,
    alignItems: "flex-end",
    width: 208,
    zIndex: null,
    gap: 13,
  },
  receiveInner: {
    width: 242,
    height: 187,
    paddingLeft: 34,
    zIndex: null,
  },
  zetabot: {
    width: 67,
    fontSize: FontSize.size_18,
    letterSpacing: 0.1,
    color: Color.colorGray100,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    lineHeight: 21,
    height: 21,
    textAlign: "left",
  },
  zetabotWrapper: {
    width: 219,
    paddingLeft: 155,
    height: 21,
    flexDirection: "row",
    zIndex: null,
  },
  icbaselineLockOpenIcon: {
    overflow: "hidden",
  },
  text1: {
    width: 52,
    fontSize: FontSize.size_16,
    fontWeight: "800",
    fontFamily: FontFamily.robotoBlack,
    color: Color.colorWhite,
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: {
      width: 0,
      height: 1,
    },
    textShadowRadius: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    lineHeight: 21,
    height: 21,
  },
  button59: {
    width: 301,
    borderRadius: Border.br_4,
    backgroundColor: Color.colorLightgreen,
    height: 71,
    paddingHorizontal: Padding.p_14,
    paddingVertical: 7,
    gap: Gap.gap_1,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: Color.colorGray300,
  },
  button59Wrapper: {
    width: 337,
    height: 74,
    paddingLeft: 36,
  },
  marginWrapIcon: {},
  text2: {
    width: 151,
  },
  text3: {
    width: 211,
  },
  p68: {
    flexWrap: "wrap",
    alignContent: "flex-start",
    width: 207,
    height: 35,
  },
  p68Layout: {
    width: 207,
    height: 35,
  },
  marginWrap: {
    paddingLeft: 10,
    flexDirection: "row",
  },
  div64: {
    width: 303,
    height: 35,
    flexDirection: "row",
  },
  div63: {
    width: 333,
    borderRadius: 11,
    backgroundColor: Color.colorAliceblue,
    borderColor: Color.colorLightsteelblue,
    borderWidth: 1,
    height: 65,
    padding: Padding.p_15,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: Color.colorGray300,
  },
  div63Wrapper: {
    width: 354,
    height: 78,
    paddingLeft: 21,
    paddingBottom: 13,
    flexDirection: "row",
  },
  div641: {
    borderColor: Color.colorGainsboro,
    borderTopWidth: 1,
    height: 56,
    justifyContent: "space-between",
    paddingTop: Padding.p_1,
    borderStyle: "solid",
    overflow: "hidden",
    alignItems: "center",
    gap: 0,
    backgroundColor: Color.colorWhite,
    width: 375,
  },
  receive1: {
    height: 863,
    paddingLeft: Padding.p_1,
    paddingTop: 35,
    gap: 13,
    backgroundColor: Color.colorWhite,
    width: 375,
  },
  receive: {
    flex: 1,
    maxWidth: "100%",
  },
});

export default Receive;
