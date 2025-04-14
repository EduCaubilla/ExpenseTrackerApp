import { Text, View, StyleSheet } from "react-native"
import ExpensesSummary from "./ExpensesSummary"
import ExpensesList from "./ExpensesList"

function ExpensesOutput({ expenses, expensesPeriod, fallbackText }) {
    let content = <Text style={styles.infoText}>{ fallbackText }</Text>;

    if (expenses.length > 0) {
        content = <ExpensesList expenses={expenses} />
    }

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      {content}
    </View>
  );
}

export default ExpensesOutput

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 15,
        paddingBottom: 5
    },
    infoText: {
        color: "white",
        fontSize: 16,
        textAlign: "center",
        marginTop: 50
    }
})