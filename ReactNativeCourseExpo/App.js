import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AllPlaces} from './screens/AllPlaces';
import {AddPlace} from './screens/AddPlace';
import {Colors} from './constants/colors';
import {IconButton} from "./components/UI/IconButton";
import {Map} from "./screens/Map";
import {useEffect, useState} from "react";
import {init} from "./util/database";
import AppLoading from "expo-app-loading";
import {Text} from "react-native";
import {PlaceDetails} from "./screens/PlaceDetails";

const Stack = createNativeStackNavigator();

export default function App() {
    const [dbInitialized, setBbInitialized] = useState(false);
    useEffect(() => {
        init()
            .then(() => {
                setBbInitialized(true);
            })
            .catch((err) => {
                console.log(err)
            });
    }, []);

    if (!dbInitialized) {
        // return <Text style={{color: 'white'}}>Loading...</Text>;
        return <AppLoading/>;
    }

    return (
        <>
            <StatusBar style="dark"/>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerStyle: {backgroundColor: Colors.primary500},
                        headerTintColor: Colors.gray700,
                        contentStyle: {backgroundColor: Colors.gray700},
                    }}
                >
                    <Stack.Screen
                        name="AllPlaces"
                        component={AllPlaces}
                        options={({navigation}) => ({
                            title: 'Your Favorite Places',
                            headerRight: ({tintColor}) => (
                                <IconButton
                                    icon="add"
                                    size={24}
                                    color={tintColor}
                                    onPress={() => navigation.navigate('AddPlace')}
                                />
                            ),
                        })}
                    />
                    <Stack.Screen
                        name="AddPlace"
                        component={AddPlace}
                        options={{
                            title: 'Add a new Place',
                        }}
                    />
                    <Stack.Screen name="Map" component={Map}/>
                    <Stack.Screen
                        name="PlaceDetails"
                        component={PlaceDetails}
                        options={{
                            title: 'Loading place...',
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}
