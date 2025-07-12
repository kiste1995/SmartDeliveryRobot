import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import Marginwrap from "../assets/marginwrap.svg";
import { Color, FontFamily, Padding } from "../GlobalStyles";

const FrameComponent = () => {
  return (
    <View style={styles.div38Wrapper}>
      <View style={styles.div38}>
        <View style={styles.div39}>
          <Marginwrap style={styles.marginWrapIcon} width={16} height={28} />
          <View style={styles.marginWrap}>
            <View style={styles.p43Layout}>
              <View style={[styles.p43, styles.p43Layout]}>
                <Text style={[styles.text, styles.textTypo]}>
                  문을 수동으로 꼭 닫아주세요!
                </Text>
                <Text style={styles.textTypo}>
                  문을 닫은 후 배달 시작 버튼을 눌러주세요!
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  p43Layout: {
    width: 213,
    height: 35,
  },
  textTypo: {
    textAlign: "left",
    color: Color.colorSaddlebrown,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    lineHeight: 18,
    fontSize: 12,
  },
  marginWrapIcon: {},
  text: {
    height: 18,
    width: 151,
    display: "flex",
    alignItems: "center",
  },
  p43: {
    flexWrap: "wrap",
    alignContent: "flex-start",
    gap: 0,
    flexDirection: "row",
  },
  marginWrap: {
    paddingLeft: 10,
    flexDirection: "row",
  },
  div39: {
    width: 303,
    height: 35,
    flexDirection: "row",
  },
  div38: {
    shadowColor: Color.colorGray300,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 1,
    borderRadius: 11,
    backgroundColor: Color.colorIvory,
    borderStyle: "solid",
    borderColor: Color.colorKhaki,
    borderWidth: 1,
    height: 65,
    overflow: "hidden",
    padding: Padding.p_15,
    width: 333,
  },
  div38Wrapper: {
    height: 72,
    paddingBottom: 7,
    flexDirection: "row",
    width: 333,
  },
});

export default FrameComponent;
