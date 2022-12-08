import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../../Colors";

export default function ButtonTool({gradientColors, text, icon, onPress}) {
  return (
    <Animatable.View
      style={{
        width: "22%",
        marginTop: -25,
      }}
      animation="bounceIn"
      duration={1500}
    >
      <TouchableOpacity onPress={onPress}>
        <LinearGradient
          style={styles.button}
          start={{ x: 0.1, y: 0.3 }}
          end={{ x: 0.3, y: 1.0 }}
          colors={gradientColors}
        >
          <Image style={styles.icon} source={icon} />
        </LinearGradient>
      </TouchableOpacity>
      <View style={{ alignSelf: "center" }}>
        <Text style={styles.textStyle}>{text}</Text>
      </View>
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 28,
  },
  icon: {
    width: 45,
    height: 45,
    resizeMode: "contain",
  },
  textStyle: {
    fontFamily: "serif",
    color: Colors.secondary,
    marginTop: 10
  },
});
