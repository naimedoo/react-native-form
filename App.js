import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Button, Text } from "react-native";

function App () {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

   const onPressFunction = () => {
      setEmail("")
      setPassword("")
   }
  return (
    <SafeAreaView>
      <Text style={styles.centerText}>LOGIN</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        maxLength={6}
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="password"
        keyboardType="numeric"
        maxLength={6}
      />
      <Button style={styles.button} onPress={onPressFunction} title="Envoyer" />
      </SafeAreaView>
  );
};
export default App

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    marginLeft:15,
    marginRight:15,
    borderWidth: 1,
    padding: 10,
  },
  centerText : {
    textAlign:"center",
    fontWeight:"bold",
    fontSize: 32,
    margin:10

  },
  button : {
    marginLeft:15,
    marginRight:15
  }
});