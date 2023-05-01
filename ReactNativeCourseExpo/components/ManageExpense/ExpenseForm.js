import {StyleSheet, Text, View} from "react-native";
import {Input} from "./Input";
import {useState} from "react";
import {Button} from "../UI/Button";
import {getFormattedDate} from "../../util/date";
import {GlobalStyles} from "../../constants/styles";

export const ExpenseForm = ({submitButtonLabel, onCancel, onSubmit, defaultValues}) => {
    const [inputs, setInputs] = useState({
        amount: {
            value: defaultValues ? defaultValues.amount.toString() : '',
            isValid: true,
        },
        date: {
            value: defaultValues ? getFormattedDate(defaultValues.date) : '',
            isValid: true,
        },
        description: {
            value: defaultValues ? defaultValues.description : '',
            isValid: true,
        }
    });

    const inputValuesChangeHandler = (inputIdentifier, enteredValue) => {
        setInputs((currentInputs) => {
            return {
                ...currentInputs,
                [inputIdentifier]: {value: enteredValue, isValid: true}
            }
        })
    }

    const submitHandler = () => {
        const expenseData = {
            amount: +inputs.amount.value,
            date: new Date(inputs.date.value),
            description: inputs.description.value
        };

        const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
        const dateIsValid = new Date(expenseData.date).toString() !== 'Invalid Date';
        const descriptionIsValid = expenseData.description.trim().length > 0;

        if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
            setInputs((currentInputs) => {
                return {
                    amount: {value: currentInputs.amount.value, isValid: amountIsValid},
                    date: {value: currentInputs.date.value, isValid: dateIsValid},
                    description: {value: currentInputs.description.value, isValid: descriptionIsValid},
                }
            })
            return;
        }


        onSubmit(expenseData);
    }

    const formIsInvalid =
        !inputs.amount.isValid ||
        !inputs.date.isValid ||
        !inputs.description.isValid;

    return (
        <View style={styles.form}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.inputRow}>
                <Input
                    label='Amount'
                    style={styles.rowInput}
                    invalid={!inputs.amount.isValid}
                    texInputConfig={{
                        keyboardType: 'decimal-pad',
                        onChangeText: inputValuesChangeHandler.bind(this, 'amount'),
                        value: inputs.amount.value
                    }}/>
                <Input
                    label='Date'
                    style={styles.rowInput}
                    invalid={!inputs.date.isValid}
                    texInputConfig={{
                        placeholder: 'YYYY-MM-DD',
                        maxLength: 10,
                        onChangeText: inputValuesChangeHandler.bind(this, 'date'),
                        value: inputs.date.value
                    }}/>
            </View>
            <Input
                label='Description'
                invalid={!inputs.description.isValid}
                texInputConfig={{
                    multiline: true,
                    onChangeText: inputValuesChangeHandler.bind(this, 'description'),
                    value: inputs.description.value
                    // autoCapitalize: 'none',
                    // autoCorrect: false,
                }}/>
            {formIsInvalid && <Text style={styles.errorText}>
                Invalid input values - pleas check your entered data
            </Text>}
            <View style={styles.buttonsContainer}>
                <Button style={styles.button} mode='flat' onPress={onCancel}>
                    Cancel
                </Button>
                <Button style={styles.button} onPress={submitHandler}>
                    {submitButtonLabel}
                </Button>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    form: {
        marginTop: 40
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
        marginVertical: 24,
        textAlign: "center",
    },
    inputRow: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    rowInput: {
        flex: 1,
    },
    errorText: {
        textAlign: "center",
        color: GlobalStyles.colors.error500,
        margin: 8
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
})
