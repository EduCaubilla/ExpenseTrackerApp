import { View, Text, Pressable, StyleSheet } from "react-native"
import { GlobalStyles } from "../../constants/styles";

function Button({children, onPress, mode, style}) {
  return (
      <View style={style}>
        <Pressable onPress={onPress} style={({ pressed }) => (pressed ? styles.pressed : null)}>
            <View style={[styles.button, mode === "flat" ? styles.flat : null]}>
                <Text style={[styles.buttonText, mode === "flat" ? styles.flatText : null]}>{children}</Text>
            </View>
        </Pressable>
      </View>
  );
}

export default Button

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        padding: 10,
        backgroundColor: GlobalStyles.colors.primary500,
    },
    buttonText: {
        color: "white",
        textAlign: "center"
    },
    flat: {
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: GlobalStyles.colors.primary500
    },
    flatText: {
        color: GlobalStyles.colors.primary500
    },
    pressed: {
        opacity: 0.75,
        backgroundColor: GlobalStyles.colors.primary50,
        borderRadius: 10
    }
});