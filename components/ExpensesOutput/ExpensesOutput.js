import { View, StyleSheet } from "react-native"
import ExpensesSummary from "./ExpensesSummary"
import ExpensesList from "./ExpensesList"
import { GlobalStyles } from "../../constants/styles"

const DUMMY_EXPENSES = [
    {
        id: "e1",
        description: "A pair of shoes",
        amount: 72.70,
        date: new Date("2025-04-08")
    },
    {
        id: "e2",
        description: "Monitor for work",
        amount: 299.00,
        date: new Date("2025-04-09")
    },
    {
        id: "e3",
        description: "A pair of trousers",
        amount: 53.99,
        date: new Date("2025-04-02")
    },
    {
        id: "e4",
        description: "Comics",
        amount: 23.08,
        date: new Date("2025-04-07")
    },
    {
        id: "e5",
        description: "Fruit",
        amount: 6.74,
        date: new Date("2025-04-06")
    },
    {
        id: "e6",
        description: "Groceries",
        amount: 34.29,
        date: new Date("2025-04-10")
    },
    {
        id: "e7",
        description: "Clothes",
        amount: 47.53,
        date: new Date("2025-04-13")
    },
    {
        id: "e8",
        description: "Bread",
        amount: 3.35,
        date: new Date("2025-04-14")
    },
]

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
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
    }
})