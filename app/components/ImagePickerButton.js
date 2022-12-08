import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import * as Animatable from "react-native-animatable";
import Colors from "../../Colors";

export default function ImagePickerButton({
  textHeading,
  textContent,
  icon,
  onPress,
}) {
  return (
    <Animatable.View
      style={styles.container}
      animation="bounceIn"
      duration={1500}
    >
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Image style={styles.icon} source={icon} />

        <View style={{ alignSelf: "center" }}>
          <Text style={styles.textHeading}>{textHeading}</Text>
          <Text style={styles.textContent}>{textContent}</Text>
        </View>
      </TouchableOpacity>
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    width: "42%",
    backgroundColor: Colors.white,
    borderRadius: 20,
    shadowColor: Colors.secondary,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 4,
  },
  button: {
    height: 210,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 28,
  },
  icon: {
    width: 45,
    height: 45,
    resizeMode: "contain",
  },
  textContent: {
    fontFamily: "serif",
      marginTop: 3,
    color: Colors.secondary
  },
  textHeading: {
    fontFamily: "serif",
    fontWeight: "bold",
    fontSize: 23,
    color: Colors.secondary,
    marginTop: 20,
  },
});
