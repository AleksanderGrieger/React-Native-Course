import {PlacesList} from "../components/Places/PlacesList";
import {useIsFocused} from "@react-navigation/native";
import {useEffect, useState} from "react";
import {fetchPlaces} from "../util/database";

export const AllPlaces = () => {
    const [places, setPlaces] = useState([]);
    const isFocused = useIsFocused();
    useEffect(() => {
        const loadPlaces = async () => {
            const fetchedPlaces = await fetchPlaces();
            setPlaces(fetchedPlaces);
        }
        if (isFocused) {
            loadPlaces();
        }
    }, [isFocused])

    return <PlacesList places={places}/>
}
