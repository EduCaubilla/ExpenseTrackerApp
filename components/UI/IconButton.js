import { View, Pressable, StyleSheet } from "react-native"
import { Ionicons } from '@expo/vector-icons'

function IconButton({ icon, size, color, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => (pressed ? styles.pressed : null)}
    >
      <View style={styles.buttonContainer}>
        <Ionicons name={icon} size={size} color={color} />
      </View>
    </Pressable>
  );
}

export default IconButton

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 10,
    padding: 0,
    marginRight: 15,
    marginBottom: 2
  },
  pressed: {
    opacity: 0.7
  }
});