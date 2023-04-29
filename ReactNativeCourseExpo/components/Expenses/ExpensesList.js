import {FlatList} from "react-native";
import {ExpenseItem} from "./ExpenseItem";

const renderExpenseItem = (itemData) => {
    // return <ExpenseItem
    //     description={itemData.item.description}
    //     date={itemData.item.date}
    //     amount={itemData.item.amount}
    // />
    return <ExpenseItem {...itemData.item} />
}

export const ExpensesList = ({expenses}) => {
    return (
        <FlatList
            data={expenses}
            renderItem={renderExpenseItem}
            keyExtractor={(item) => item.id}
        />
    )
}
