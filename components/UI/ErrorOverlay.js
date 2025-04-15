import { StyleSheet, View, Text } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import Button from "./Button";

function ErrorOverlay({ message, onConfirm }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>An error ocurred!</Text>
      <Text style={styles.text}>{message}</Text>
      <Button style={{width: "80%", margin: 15}} onPress={onConfirm}>Ok</Button>
    </View>
  );
}

export default ErrorOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
  },
  text: {
    color: GlobalStyles.colors.error500,
    textAlign: "center",
    marginBottom: 10
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  },
  message: {
    fontSize: 15
  }
});
