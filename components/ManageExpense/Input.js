import { Text, TextInput, View, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function Input({ label, invalid, style, textInputConfig }) {
  const inputStyles = [styles.input];

  if (!!textInputConfig && !!textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }

  if (invalid) {
    inputStyles.push(styles.invalidInput)
  }

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, invalid ? styles.invalidLabel : null]}>{label}</Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 5,
    marginVertical: 5,
    flex: 1
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary700,
    marginBottom: 5,
  },
  input: {
    backgroundColor: "white",
    color: GlobalStyles.colors.primary700,
    borderWidth: 1,
    borderColor: GlobalStyles.colors.primary400,
    padding: 10,
    borderRadius: 10,
    fontSize: 18,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  invalidLabel: {
    color: GlobalStyles.colors.error500
  },
  invalidInput: {
    backgroundColor: GlobalStyles.colors.error50,
    borderColor: GlobalStyles.colors.error500,
  },
});
