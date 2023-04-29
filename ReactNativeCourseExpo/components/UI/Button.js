import {Pressable, StyleSheet, Text, View} from "react-native";
import {GlobalStyles} from "../../constants/styles";

export const Button = ({children, onPress, mode, style}) => {
    const isFlat = mode === 'flat';
    return (
        <View style={style}>
            <Pressable
                onPress={onPress}
                style={({pressed}) => pressed && styles.pressed}
            >
                <View style={[styles.container, isFlat && styles.flat]}>
                    <Text style={[styles.buttonText, isFlat && styles.flatText]}>
                        {children}
                    </Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 4,
        padding: 8,
        backgroundColor: GlobalStyles.colors.primary500,
    },
    flat: {
        backgroundColor: 'transparent'
    },
    buttonText: {
        color: 'white',
        textAlign: "center"
    },
    flatText: {
        color: GlobalStyles.colors.primary200
    },
    pressed: {
        opacity: 0.75,
        backgroundColor: GlobalStyles.colors.primary100,
        borderRadius: 4,
    }
});
