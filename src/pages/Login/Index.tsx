import React, {useState, useEffect, useContext} from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import axios from "axios";
import styled from "styled-components/native";
import font from "../../app/font";
import LinearGradient from "react-native-linear-gradient";
import * as Icon from "../../app/icon";
import {AuthProvider} from "../../contexts/Auth";
import Mount from "../../components/Mount";

interface Props {}

export default function (props: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {signIn, error} = useContext(AuthProvider);

  return (
    <LinearGradient
      style={styles.container}
      colors={["#66ff66", "#33ff99"]}
      start={{x: 2, y: 0}}
      end={{x: 0, y: 1}}>
      <View style={{justifyContent: "flex-start", alignItems: "center"}}>
        <Text style={styles.welcomeText}>Welcome</Text>
        <Text style={styles.titleText}>Login</Text>
      </View>
      <View style={styles.login}>
        <View style={styles.inputContainer}>
          <Icon.FontAwesome name="envelope" size={17} color="rgb(80,80,100)" />
          <TextInput
            style={styles.input}
            placeholder="e-mail"
            value={email}
            onChangeText={(text: string) => setEmail(text)}
            autoCorrect={false}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon.FontAwesome5 name="lock" size={17} color="rgb(80,80,100)" />
          <TextInput
            style={styles.input}
            placeholder="password"
            value={password}
            onChangeText={(text: string) => setPassword(text)}
            autoCorrect={false}
            autoCapitalize="none"
          />
        </View>

        <Mount render={error}>
          <Text
            style={{
              color: "white",
              fontFamily: font.OxaniumSemiBold,
              fontSize: 19,
              textShadowColor: "rgb(70,70,70)",
              textShadowRadius: 3,
              textShadowOffset: {height: 1, width: 1},
            }}>
            {error}
          </Text>
        </Mount>
      </View>

      <TouchableWithoutFeedback onPress={() => signIn(email, password)}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Started</Text>
        </View>
      </TouchableWithoutFeedback>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  login: {
    padding: 25,
    width: "100%",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: "white",
    marginVertical: 5,
    borderRadius: 5,
    elevation: 2,
  },
  titleText: {
    color: "white",
    fontFamily: font.MontserratBold,
    fontSize: 36,
    textShadowColor: "rgb(100,100,100)",
    textShadowRadius: 5,
    textShadowOffset: {height: 1, width: 1},
  },
  welcomeText: {
    color: "white",
    fontFamily: font.MontserratBold,
    fontSize: 20,
    textShadowColor: "rgb(100,100,100)",
    textShadowRadius: 5,
    textShadowOffset: {height: 1, width: 1},
  },
  input: {
    fontSize: 22,
    fontFamily: font.QuicksandBold,
    width: "100%",
    bottom: 2,
    marginLeft: 10,
  },
  button: {
    backgroundColor: "white",
    padding: 15,
    paddingHorizontal: 20,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
    elevation: 10,
  },
  buttonText: {
    fontFamily: font.MontserratSemiBold,
    fontSize: 20,
    color: "#33ff99",
  },
});
