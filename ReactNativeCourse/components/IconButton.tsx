import { Pressable, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface CustomButtonProps {
  icon: IconProp;
  color: string;
  size: number;
  onPress: () => void;
}

const IconButton = ({ icon, color, size, onPress }: CustomButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={
        ({ pressed }) => pressed && styles.pressed}
    >
      <FontAwesomeIcon icon={icon} color={color} size={size} />
    </Pressable>
  );
};


const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5
  }
});

export default IconButton;
