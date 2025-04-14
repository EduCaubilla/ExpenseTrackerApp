import { useContext, useLayoutEffect } from "react";
import { View, StyleSheet} from "react-native";

import IconButton from "../components/UI/IconButton";
import Button from "../components/UI/Button";
import { GlobalStyles } from "../constants/styles";
import { ExpensesContext } from "../store/expenses-context";

function ManageExpense({ route, navigation }) {
    const expenseContext = useContext(ExpensesContext)

    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId

    useLayoutEffect(() => {
      navigation.setOptions({
        title: isEditing ? "Edit Expense" : "Add Expense",
      });
    }, [navigation, isEditing]);

    function deleteExpenseHandler(){
        expenseContext.deleteExpense(editedExpenseId);
        navigation.goBack();
    }

    function cancelHandler(){

        navigation.goBack();
    }

    function confirmHandler() {
      if (isEditing) {
        expenseContext.updateExpense(editedExpenseId, {
          description: "TestUpdate",
          amount: 29.99,
          date: new Date("2025-02-04"),
        });
      } else {
        expenseContext.addExpense({
          description: "TestAdd",
          amount: 19.99,
          date: new Date("2025-05-04"),
        });
      }

      navigation.goBack();
    }

    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
            <Button style={styles.button} mode="flat" onPress={cancelHandler}>Cancel</Button>
            <Button style={styles.button} onPress={confirmHandler}>{ isEditing ? "Update" : "Add" }</Button>
        </View>
        {isEditing && (
          <View style={styles.deleteContainer}>
            <IconButton
              icon="trash-outline"
              color={GlobalStyles.colors.error500}
              size={35}
              onPress={deleteExpenseHandler}
            />
          </View>
        )}
      </View>
    );
}

export default ManageExpense;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "white"
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    deleteContainer: {
        marginTop: 15,
        paddingTop: 10,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: "center"
    },
    button: {
        flex: 1,
        marginHorizontal: 5
    }
})