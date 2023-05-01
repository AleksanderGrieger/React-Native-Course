import AllExpenses from "./screens/AllExpenses";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {StatusBar} from "expo-status-bar";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {RecentExpenses} from "./screens/RecentExpenses";
import {ManageExpense} from "./screens/ManageExpense";
import {GlobalStyles} from "./constants/styles";
import {Ionicons} from "@expo/vector-icons"
import {IconButton} from "./components/UI/IconButton";
import ExpensesContextProvider from "./store/expenses-context";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const ExpensesOverview = () => {
    return (
        <BottomTabs.Navigator screenOptions={({navigation}) => ({
            headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
            headerTintColor: "white",
            tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
            tabBarActiveTintColor: GlobalStyles.colors.accent500,
            tabBarInactiveTintColor: GlobalStyles.colors.primary200,
            content: {backgroundColor: "#06399a"},
            headerRight: ({tintColor}) => {
                return <IconButton
                    icon='add'
                    color={tintColor} size={24}
                    onPress={() => navigation.navigate('ManageExpenses')}
                />
            }
        })}
        >
            <BottomTabs.Screen
                name="ResentExpenses"
                component={RecentExpenses}
                options={{
                    title: "Resent Expenses",
                    tabBarLabel: "Resent",
                    tabBarIcon: ({color, size}) =>
                        <Ionicons name='hourglass' size={size} color={color}/>
                }}
            />
            <BottomTabs.Screen
                name="AllExpenses"
                component={AllExpenses}
                options={{
                    title: "All Expenses",
                    tabBarLabel: "All Expenses",
                    tabBarIcon: ({color, size}) =>
                        <Ionicons name='calendar' size={size} color={color}/>
                }}
            />
        </BottomTabs.Navigator>)
}

export default function App() {
    return (
        <>
            <StatusBar style="light"/>
            <ExpensesContextProvider>
                <NavigationContainer>
                    <Stack.Navigator
                        screenOptions={{
                            headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
                            headerTintColor: "white",
                            contentStyle: {backgroundColor: "#06399a"}
                        }}
                    >
                        <Stack.Screen
                            name="Expenses Overview"
                            component={ExpensesOverview}
                            options={{
                                headerShown: false
                            }}
                        />
                        <Stack.Screen
                            name="ManageExpenses"
                            component={ManageExpense}
                            options={{
                                presentation: 'modal'
                            }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </ExpensesContextProvider>
        </>
    );
}
