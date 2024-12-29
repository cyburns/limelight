import React, { forwardRef } from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  type View,
  useColorScheme,
} from "react-native";

export interface ButtonProps {
  children: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
  disabled?: boolean;
  onPress?: () => void;
}

const Button = forwardRef<View, ButtonProps>(
  (
    {
      children,
      variant = "default",
      size = "default",
      disabled = false,
      onPress,
    },
    ref
  ) => {
    const textColor = useColorScheme() === "dark" ? "#ffffff" : "#1c1c1c";

    return (
      <Pressable
        ref={ref}
        style={[styles.base]}
        onPress={onPress}
        disabled={disabled}
      >
        <Text style={[styles.textLg, { color: textColor }]}>{children}</Text>
      </Pressable>
    );
  }
);

Button.displayName = "Button";

const styles = StyleSheet.create({
  base: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    fontSize: 14,
    fontWeight: "500",
  },
  default: {
    backgroundColor: "#1c1c1c",
    color: "#ffffff",
  },
  destructive: {
    backgroundColor: "#ef4444",
    color: "#ffffff",
  },
  outline: {
    borderWidth: 1,
    borderColor: "#e5e7eb",
    backgroundColor: "#ffffff",
    color: "#1c1c1c",
  },
  secondary: {
    backgroundColor: "#f3f4f6",
    color: "#1c1c1c",
  },
  ghost: {
    backgroundColor: "transparent",
  },
  link: {
    textDecorationLine: "underline",
    color: "#1c1c1c",
  },
  sizeDefault: {
    height: 40,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  sizeSm: {
    height: 36,
    paddingHorizontal: 12,
  },
  sizeLg: {
    height: 44,
    paddingHorizontal: 32,
  },
  disabled: {
    opacity: 0.5,
  },
  //Text
  textDefault: {
    fontSize: 14,
  },
  textSm: {
    fontSize: 12,
    fontFamily: "Inter",
  },
  textLg: {
    fontSize: 16,
    fontFamily: "Inter",
  },
});

export default Button;
