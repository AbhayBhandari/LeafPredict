import { Image, StyleSheet, TextInput, View } from "react-native";
import React from "react";

import * as Animatable from "react-native-animatable";
import Colors from "../../Colors";

export default function SearchBox({ value, setValue }) {
  return (
    <Animatable.View
      animation="slideInRight"
      duration={1500}
      style={styles.container}
    >
      <View style={styles.components}>
        <Image
          style={styles.icon}
          source={require("../../images/search-icon.png")}
        />
        <TextInput
          value={value}
          onChangeText={setValue}
          style={styles.textInput}
          placeholder="Search"
        />
      </View>
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 13,
    marginVertical: 40,
  },
  components: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 50,
    borderRadius: 100,
    paddingLeft: 15,
    backgroundColor: Colors.white,
    paddingRight: 15,

    shadowColor: Colors.secondary,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 6,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    marginRight: 20,
    marginLeft: 10,
  },
  textInput: {
    fontSize: 20,
    width: "90%",
    fontFamily: "serif",
  },
});
