import {PlaceForm} from "../components/Places/PlaceForm";
import {insertPlace} from "../util/database";

export const AddPlace = ({navigation}) => {

    const createPlaceHandler = async (place) => {
        await insertPlace(place)
        navigation.navigate('AllPlaces');
    }

    return <PlaceForm onCreatePlaceHandler={createPlaceHandler}/>;
}
