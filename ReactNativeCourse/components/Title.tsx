import { Platform, StyleSheet, Text } from "react-native";

interface TitleProps {
  children: string
}

const Title = ({children}: TitleProps) => {

  return (
    <Text style={styles.title}>{children}</Text>
  )
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: 'white',
    textAlign: "center",
    // borderWidth: Platform.OS === "android" ? 2 : 1,
    borderWidth: Platform.select({ios: 2, android: 1}),
    //todo: or duplicate file and rename to: Title.android/ios.tsx - automatically applies - check imports (should be without .[platform])
    borderColor: 'white',
    padding: 12,
  }
});

export default Title;
