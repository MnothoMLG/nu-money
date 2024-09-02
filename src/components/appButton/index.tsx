import React, { FC } from 'react';
import { Text } from '../text';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { colors } from '@theme';

type variant = 'primary' | 'secondary' | 'tertiary';
export interface AppButtonProps extends TouchableOpacityProps {
  label?: string;
  fullWidth?: boolean;
  rounded?: boolean;
  loading?: boolean;
  variant?: variant;
  br?: number;
  bold?: boolean;
  textSize?: number;
  textColor?: string;
}

export const AppButton: FC<AppButtonProps> = ({
  label,
  children,
  fullWidth,
  style,
  loading,
  textSize,
  textColor,
  br,
  bold,
  rounded,
  variant = 'primary',
  disabled,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[
        bodyStyle.base,
        bodyStyle[variant],
        fullWidth ? bodyStyle.fullWidth : null,
        style,
        { borderRadius: br || 0 },
        disabled ? bodyStyle.disabled : null,
      ]}
      {...props}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator
          color={variant === 'primary' ? colors.static : colors.primary}
          size='small'
        />
      ) : label ? (
        <>
          <Text
            style={[textStyle[variant], !!textColor && { color: textColor }]}
            size={textSize || 16}
            bold={bold}
          >
            {label}
          </Text>
        </>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};
const textStyle = StyleSheet.create({
  primary: {
    color: colors.static,
  },
  secondary: {
    color: colors.primary,
  },
  tertiary: {
    color: colors.primary,
  },
});

const bodyStyle = StyleSheet.create({
  base: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  primary: {
    backgroundColor: colors.primary,
  },
  tertiary: {
    borderStyle: 'dashed',

    borderColor: colors.primary,
    borderWidth: 1,

    backgroundColor: colors.static,
  },
  secondary: {
    borderColor: colors.primary,
    borderWidth: 1,
    backgroundColor: colors.transparent,
    paddingHorizontal: 12,
  },
  fullWidth: {
    width: '100%',
  },

  disabled: {
    opacity: 0.5,
    backgroundColor: colors.teal,
  },
});
