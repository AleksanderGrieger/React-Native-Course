import {Alert, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {useCallback, useLayoutEffect, useState} from "react";
import {IconButton} from "../components/UI/IconButton";

export const Map = ({navigation, route}) => {
    const initialLocation = route.params && {
        lat: route.params.initialLat,
        lng: route.params.initialLng
    }
    const [selectedLocation, setSelectedLocation] = useState(initialLocation);


    const region = {
        latitude: initialLocation ? initialLocation.lat : 53.604933,
        longitude: initialLocation ? initialLocation.lng : 14.520664,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };

    const selectLocationHandler = (event) => {
        if (initialLocation) {
            return;
        }
        const lat = event.nativeEvent.coordinate.latitude;
        const lng = event.nativeEvent.coordinate.longitude;

        setSelectedLocation({lat: lat, lng: lng});
    }

    const savePickedLocationHandler = useCallback(() => {
        if (!selectedLocation) {
            Alert.alert(
                'No location picked!',
                'You have to pick a location (by tapping on the map) first!'
            );
            return;
        }

        navigation.navigate('AddPlace', {
            pickedLat: selectedLocation.lat,
            pickedLng: selectedLocation.lng,
        });
    }, [navigation, selectedLocation]);

    useLayoutEffect(() => {
        if (initialLocation) {
            return;
        }
        navigation.setOptions({
            headerRight: ({tintColor}) => (
                <IconButton
                    icon="save"
                    size={24}
                    color={tintColor}
                    onPress={savePickedLocationHandler}
                />
            ),
        });
    }, [navigation, savePickedLocationHandler, initialLocation]);

    return (
        <MapView
            style={styles.map}
            initialRegion={region}
            onPress={selectLocationHandler}
        >
            {selectedLocation &&
                <Marker
                    coordinate={{
                        latitude: selectedLocation.lat,
                        longitude: selectedLocation.lng
                    }}/>
            }
        </MapView>
    );
}


const styles = StyleSheet.create({
    map: {
        flex: 1,
    },
});
