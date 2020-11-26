import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {}

  render = () => (
    <ImageBackground
      source={{
        uri:
          "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/126263_car-wallpaper-app.jpg"
      }}
      style={styles.ImageBackground_1}
    >
      <Icon
        iconFont="FontAwesome Icons"
        name="arrow-up"
        style={styles.Icon_3}
      />
      <Icon
        iconFont="FontAwesome Icons"
        name="arrow-down"
        style={styles.Icon_5}
      />
      <Icon name="arrow-left" style={styles.Icon_7} />
      <Icon name="arrow-right" style={styles.Icon_9} />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },
  ImageBackground_1: { backgroundSize: "stretch" },
  Icon_3: {
    marginTop: 171,
    marginBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5,
    alignSelf: "center",
    fontSize: 20,
    color: "#000000",
    backgroundColor: "#ffffff",
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    textAlignVertical: "center",
    textDecorationLine: "none",
    textTransform: "none",
    lineHeight: 12,
    letterSpacing: 0
  },
  Icon_5: {
    marginTop: 24,
    marginBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5,
    alignSelf: "center",
    fontSize: 20,
    textAlign: "left",
    textAlignVertical: "center",
    textDecorationLine: "none",
    textTransform: "none",
    lineHeight: 12,
    letterSpacing: 0
  },
  Icon_7: { marginLeft: 109, marginTop: -64 },
  Icon_9: { marginRight: 108, marginTop: -34, alignSelf: "flex-end" }
})
