import { useContext, useEffect, useState } from "react";

import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";
import { getExpenses } from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";

function RecentExpenses() {
  const [isFetching, setIsFetching] = useState();
  const [error, setError] = useState();

  const expensesContext = useContext(ExpensesContext);
  // const [gotExpenses, setGetExpenses] = useState([])

  useEffect(() => {
    async function requestExpenses() {
      setIsFetching(true);
      try {
        const expensesData = await getExpenses();
        expensesContext.setExpenses(expensesData);
        // setGetExpenses(expensesData);
      } catch (error) {
        setError("Could not get expenses from server:\n " + error);
      }
      setIsFetching(false);
    }
    requestExpenses();
  }, []);

  function errorHandler() {
    setError(null);
  }

  if(error && !isFetching){
    return <ErrorOverlay message={error} onConfirm={errorHandler}/>
  }

  if (isFetching) {
    return <LoadingOverlay />
  }

    // const recentExpenses = gotExpenses.filter((expense) => {
  const recentExpenses = expensesContext.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 days"
      fallbackText={"No expenses registered for the last 7 days"}
    />
  );
}

export default RecentExpenses;
