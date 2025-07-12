import * as React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily } from "../GlobalStyles";

const SplashScreen = () => {
  return (
    <ScrollView
      style={styles.splashScreen}
      contentContainerStyle={styles.splashScreenScrollViewContent}
    >
      <View style={[styles.root1, styles.div5Layout]}>
        <LinearGradient
          style={[styles.div2, styles.div2Position]}
          locations={[0, 1]}
          colors={["#eff6ff", "#e0e7ff"]}
        >
          <Image
            style={styles.div2Position}
            contentFit="cover"
            source={require("../assets/div3.png")}
          />
          <View style={[styles.div5, styles.div5Layout]}>
            <View style={styles.marginWrap} />
            <Image
              style={styles.marginWrapIcon}
              contentFit="cover"
              source={require("../assets/marginwrap2.png")}
            />
          </View>
        </LinearGradient>
        <Text style={[styles.smartRobot, styles.robotPosition]}>
          Smart Robot
        </Text>
        <View style={styles.indoorLogisticsRobotWrapper}>
          <Text style={[styles.indoorLogisticsRobot, styles.robotPosition]}>
            Indoor Logistics Robot
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  splashScreenScrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: 812,
  },
  div5Layout: {
    height: 812,
    width: 375,
  },
  div2Position: {
    zIndex: 0,
    left: 0,
    top: 0,
    position: "absolute",
    height: 812,
    width: 375,
  },
  robotPosition: {
    zIndex: 2,
    textAlign: "center",
    color: Color.colorWhite,
  },
  marginWrap: {
    width: 219,
    height: 750,
  },
  marginWrapIcon: {
    width: 240,
    height: 41,
  },
  div5: {
    alignItems: "center",
    paddingHorizontal: 28,
    paddingVertical: 0,
    zIndex: 1,
  },
  div2: {
    overflow: "hidden",
    backgroundColor: "transparent",
  },
  smartRobot: {
    width: 271,
    height: 51,
    fontSize: 54,
    lineHeight: 51,
    fontFamily: FontFamily.afacad,
  },
  indoorLogisticsRobot: {
    width: 204,
    fontSize: 13,
    fontFamily: FontFamily.aDLaMDisplay,
    height: 17,
  },
  indoorLogisticsRobotWrapper: {
    width: 234,
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingRight: 33,
    height: 17,
  },
  root1: {
    alignItems: "flex-end",
    paddingLeft: 53,
    paddingTop: 80,
    paddingRight: 54,
    paddingBottom: 651,
    gap: 13,
  },
  splashScreen: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    maxWidth: 375,
    width: 375,
  },
});

export default SplashScreen;
