import { StyleSheet, View, ActivityIndicator } from "react-native"
import { GlobalStyles } from "../../constants/styles"

function LoadingOverlay() {
    return <View style={styles.container}>
        <ActivityIndicator size="large" color={GlobalStyles.colors.primary500} />
    </View>
}

export default LoadingOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
  },
});