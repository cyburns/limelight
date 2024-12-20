import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";

// Define the variants for the button
const buttonVariants = {
  default: {
    backgroundColor: "#007bff",
    color: "#ffffff",
  },
  destructive: {
    backgroundColor: "#dc3545",
    color: "#ffffff",
  },
  outline: {
    borderColor: "#ced4da",
    borderWidth: 1,
    backgroundColor: "transparent",
    color: "#212529",
  },
  secondary: {
    backgroundColor: "#6c757d",
    color: "#ffffff",
  },
  ghost: {
    backgroundColor: "transparent",
    color: "#212529",
  },
  link: {
    backgroundColor: "transparent",
    color: "#007bff",
    textDecorationLine: "underline",
  },
};

// Define sizes for the button
const buttonSizes = {
  default: {
    height: 40,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  sm: {
    height: 36,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  lg: {
    height: 48,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  icon: {
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
  },
};

type ButtonProps = {
  title: string;
  variant?: keyof typeof buttonVariants;
  size?: keyof typeof buttonSizes;
  disabled?: boolean;
  onPress?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  title,
  variant = "default",
  size = "default",
  disabled = false,
  onPress,
}) => {
  const variantStyle = buttonVariants[variant];
  const sizeStyle = buttonSizes[size];

  const combinedStyles: ViewStyle = {
    // ...sizeStyle,
    ...variantStyle,
    opacity: disabled ? 0.5 : 1,
  };

  const textStyle: TextStyle = {
    color: variantStyle.color,
    textAlign: "center",
  };

  return (
    <TouchableOpacity
      style={[styles.button, combinedStyles]}
      onPress={disabled ? undefined : onPress}
      activeOpacity={0.7}
    >
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Button;
