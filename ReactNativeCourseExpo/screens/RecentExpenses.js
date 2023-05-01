import {ExpensesOutput} from "../components/Expenses/ExpensesOutput";
import {useContext, useEffect, useState} from "react";
import {ExpensesContext} from "../store/expenses-context";
import {getDateMinusDays} from "../util/date";
import {fetchExpenses} from "../util/http";
import {LoadingOverlay} from "../components/UI/LoadingOverlay";
import {ErrorOverlay} from "../components/UI/ErrorOverlay";

export const RecentExpenses = () => {
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState();
    const expensesCtx = useContext(ExpensesContext);

    useEffect(() => {
        const getExpenses = async () => {
            setIsFetching(true);
            try {
                const expenses = await fetchExpenses();
                expensesCtx.setExpenses(expenses);
            } catch (e) {
                setError('Could not fetch expenses.')
                setIsFetching(false);
            }
            setIsFetching(false);
        }

        getExpenses();
    }, [])

    const recentExpenses = expensesCtx.expenses.filter((expense) => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today, 7);
        return (expense.date >= date7DaysAgo) && (expense.date <= today);
    });

    if (error && !isFetching) {
        return <ErrorOverlay message={error} />;
    }

    return (
        <>
            {isFetching
                ? <LoadingOverlay/>
                : <ExpensesOutput
                    expenses={recentExpenses}
                    expensesPeriod="Last 7 Days"
                    fallbackText='No expenses registered for the last 7 days'
                />
            }
        </>
    )
}

