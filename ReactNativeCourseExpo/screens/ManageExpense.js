import {StyleSheet, View} from "react-native";
import {useContext, useLayoutEffect} from "react";
import {IconButton} from "../components/UI/IconButton";
import {GlobalStyles} from "../constants/styles";
import {Button} from "../components/UI/Button";
import {ExpensesContext} from "../store/expenses-context";

export const ManageExpense = ({route, navigation}) => {
    const expensesCtx = useContext(ExpensesContext);

    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        })
    }, [navigation, isEditing])

    const deleteExpenseHandler = () => {
        expensesCtx.deleteExpense(editedExpenseId);
        navigation.goBack();
    }

    const cancelHandler = () => {
        navigation.goBack();
    }

    const confirmHandler = () => {
        if (isEditing) {
            expensesCtx.updateExpense(
                editedExpenseId,
                {
                    description: 'Test Edit',
                    amount: 12.54,
                    date: new Date()
                }
            );
        } else {
            expensesCtx.addExpense(
                {
                    description: 'Test ADD',
                    amount: 98.12,
                    date: new Date()
                }
            )
        }
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <View style={styles.buttonsContainer}>
                <Button style={styles.button} mode='flat' onPress={cancelHandler}>
                    Cancel
                </Button>
                <Button style={styles.button} onPress={confirmHandler}>
                    {isEditing ? 'Update' : "Add"}
                </Button>
            </View>
            {isEditing && (
                <View style={styles.deleteContainer}>
                    <IconButton
                        icon='trash'
                        color={GlobalStyles.colors.error500}
                        size={36}
                        onPress={deleteExpenseHandler}
                    />
                </View>
            )}
        </View>
    );

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800,
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8
    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderColor: GlobalStyles.colors.primary200,
        alignItems: "center",
    },
});
