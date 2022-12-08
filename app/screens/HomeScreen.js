import { View, StyleSheet } from "react-native";
import React, { useState } from "react";

import Header from "../components/Header";
import ButtonTool from "../components/ButtonTool";
import Colors from "../../Colors";
import SearchBox from "../components/SearchBox";
import ImagePickerButton from "../components/ImagePickerButton";
import * as ImagePicker from "expo-image-picker";
import myStorage from "../../Config";

const handleHistoryButton = () => {
  console.log("History Button");
};

const handleSavedButton = () => {
  console.log("Saved Button");
};

const uploadImage = async (imageUri) => {
  const response = await fetch(imageUri);
  const blob = await response.blob();

  let filenameAfterDot = imageUri.substring(imageUri.lastIndexOf(".") + 1);

  let d = new Date();

  let val =
    d.getDate() +
    "-" +
    d.getMonth() +
    "-" +
    d.getFullYear() +
    "-" +
    d.getHours() +
    "-" +
    d.getMinutes() +
    "-" +
    d.getSeconds() +
    "-" +
    d.getMilliseconds();
  
  let filepath = "users/images/" + val + "." + filenameAfterDot;
  var ref = myStorage.ref().child(filepath).put(blob);

  try {
    await ref;
  } catch (e) {
    console.log("error is ", e);
  }
};

export default function HomeScreen() {
  const [cameraImage, setCameraImage] = useState(null);
  const [galleryImage, setGalleryImage] = useState(null);

  const handleCameraButton = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
    });
    if (!result.canceled) {
      setCameraImage(result.assets[0].uri);
      uploadImage(result.assets[0].uri);
    }
  };

  const handleGalleryButton = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
    });
    if (!result.canceled) {
      setGalleryImage(result.assets[0].uri);
      uploadImage(result.assets[0].uri);
    }
  };
  return (
    <View style={styles.container}>
      <Header />
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <ButtonTool
          gradientColors={["#006e1e", "#3c8d14", "#37f362"]}
          text="History"
          icon={require("../../images/history-white.png")}
          onPress={handleHistoryButton}
        />
        <ButtonTool
          gradientColors={["#ff7914", "#ff8529", "#ffff00"]}
          text="Saved"
          icon={require("../../images/save-white.png")}
          onPress={handleSavedButton}
        />
      </View>
      <SearchBox />

      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <ImagePickerButton
          textHeading="Camera"
          textContent="Tap to open camera"
          icon={require("../../images/camera.png")}
          onPress={handleCameraButton}
        />
        <ImagePickerButton
          textHeading="Gallery"
          textContent="Tap to open gallery"
          icon={require("../../images/gallery.png")}
          onPress={handleGalleryButton}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.bgColor,
    flex: 1,
  },
});
