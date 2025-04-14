import { Pressable, Text, View, StyleSheet, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { GlobalStyles } from "../../constants/styles";
import { getFormattedDate } from "../../util/date";

function ExpenseItem({ id, description, amount, date }) {
    const navigation = useNavigation()

  function expensePressHandler() {
    navigation.navigate("ManageExpense", {
        expenseId: id
    })
  }

  const formattedDate = getFormattedDate(date)

  return (
    <Pressable
      onPress={expensePressHandler}
      style={({ pressed }) => (pressed ? styles.pressed : null)}
    >
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{formattedDate}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount.toFixed(2)} €</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default ExpenseItem;

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.5
    },
    expenseItem: {
        padding:15,
        marginVertical:10,
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 10,
        elevation: Platform.OS == "android" ? 3 : 0,
        shadowColor: GlobalStyles.colors.gray100,
        shadowRadius: 2,
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.25
    },
    textBase: {
        color: GlobalStyles.colors.primary500
    },
    description: {
        fontSize: 16,
        marginBottom: 5,
        fontWeight: "500",
    },
    amountContainer: {
        padding: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    amount: {
        color: GlobalStyles.colors.primary500,
        fontWeight: "light",
        fontSize: 18,
        color: GlobalStyles.colors.primary500
    }
});
