import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";

const usersCurrentTime = () => {
  var today = new Date();
  var currentHour = today.getHours();

  if (currentHour < 12) {
    return "Morning";
  } else if (currentHour < 18) {
    return "Afternoon";
  } else {
    return "Evening";
  }
};

export default function Header() {
  const currentTime = usersCurrentTime();
  return (
    <View style={styles.header}>
      <ImageBackground
        resizeMode="cover"
        style={styles.headerImage}
        source={require("../../images/header1.jpg")}
      >
        <Text style={styles.imageTopHeaderText}>
          Good {currentTime}, Plant Lovers!
        </Text>
        <Text style={styles.imageBottomHeaderText}>Glad to see you!</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "30%",
  },
  headerImage: {
    flex: 1,
    overflow: "hidden",
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  imageBottomHeaderText: {
    fontFamily: "serif",
    fontSize: 20,
    fontWeight: "700",
    color: "white",
    lineHeight: 35,
    backgroundColor: "rgba(0,0,0,0.35)",
    marginBottom: 40
  },
  imageTopHeaderText: {
    marginTop: 40,
    fontFamily: "serif",
    fontSize: 23,
    fontWeight: "700",
    color: "white",
    lineHeight: 40,
    backgroundColor: "rgba(0,0,0,0.35)",
  },
});
