import { useContext, useLayoutEffect, useState } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";

import IconButton from "../components/UI/IconButton";
import Button from "../components/UI/Button";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import { GlobalStyles } from "../constants/styles";
import LoadingOverlay from "../components/UI/LoadingOverlay";

import { ExpensesContext } from "../store/expenses-context";
import { storeExpense, updateExpense, deleteExpense } from "../util/http";
import ErrorOverlay from "../components/UI/ErrorOverlay";

function ManageExpense({ route, navigation }) {
  const [isSubmitting, setisSubmitting] = useState();
  const [error, setError] = useState();

  const expensesContext = useContext(ExpensesContext);

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  const selectedExpense = expensesContext.expenses.find(expense => expense.id === editedExpenseId)

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  async function deleteExpenseHandler() {
    setisSubmitting(true);
    try {
      await deleteExpense(editedExpenseId);
      expensesContext.deleteExpense(editedExpenseId);
      navigation.goBack();
    } catch (error) {
      setError("Item couldn't be deleted: \n" + error)
    }
    setisSubmitting(false);
  }

  function cancelHandler() {
    navigation.goBack();
  }

  async function confirmHandler(expenseData) {
    setisSubmitting(true);
    try {
    if (isEditing) {
      expensesContext.updateExpense(editedExpenseId, expenseData);
        await updateExpense(editedExpenseId, expenseData);
        setisSubmitting(false);
      } else {
        const id = await storeExpense(expenseData);
        expensesContext.addExpense({...expenseData, id: id});
        setisSubmitting(false);
      }
      navigation.goBack();
    } catch (error) {
      setError("Item couldn't be saved:\n " + error);
      setisSubmitting(false);
    }
  }

  function errorHandler() {
    setError(null);
  }

  if(error && !isSubmitting){
    return <ErrorOverlay message={error} onConfirm={errorHandler}/>
  }

  if (isSubmitting) {
    return <LoadingOverlay />
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        submitButtonLabel={isEditing ? "Update" : "Add"}
        onSubmit={confirmHandler}
        onCancel={cancelHandler}
        defaultValues={selectedExpense}
      />
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
    backgroundColor: "white",
  },
  deleteContainer: {
    marginTop: 15,
    paddingTop: 10,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  }
});
