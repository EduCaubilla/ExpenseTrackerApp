import { StyleSheet, View, Text } from "react-native"
import { GlobalStyles } from "../../constants/styles";

function ExpensesSummary({ expenses, periodName }) {
    const expensesSum = expenses.reduce((sum, expense) => {
      return sum + expense.amount;
    }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>{expensesSum.toFixed(2)} €</Text>
    </View>
  );
}

export default ExpensesSummary

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15,
        backgroundColor: GlobalStyles.colors.primary50,
        borderRadius: 10,
        justifyContent: "space-between",
        alignItems: "center",
    },
    period: {
        fontSize: 14,
        color:GlobalStyles.colors.primary400,
        marginBottom:5
    },
    sum: {
        fontSize: 20,
        fontWeight: "bold",
        color: GlobalStyles.colors.primary500
    }
})