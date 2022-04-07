import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Button } from "react-native";

function App () {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

   const onPressFunction = () => {
      setEmail("")
      setPassword("")
   }
  return (
    <SafeAreaView>
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
      <Button onPress={onPressFunction} title="Envoyer"/>
      </SafeAreaView>
  );
};
export default App

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});