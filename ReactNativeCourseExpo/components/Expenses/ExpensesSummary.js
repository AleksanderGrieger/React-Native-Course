import {StyleSheet, Text, View} from "react-native";
import {GlobalStyles} from "../../constants/styles";

export const ExpensesSummary = ({expenses, periodName}) => {
    const expensesSum = expenses.reduce((sum, expense) => {
        return sum + expense.amount;
    }, 0);

    return (
        <View style={styles.container}>
            <Text style={styles.period}>{periodName}</Text>
            <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 8,
        borderRadius: 6,
        backgroundColor: GlobalStyles.colors.primary50,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    period: {
        fontSize: 12,
        color: GlobalStyles.colors.primary400
    },
    sum: {
        fontSize: 16,
        fontWeight: "bold",
        color: GlobalStyles.colors.primary500
    }
});
