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

export const LoanCard: FC<AppButtonProps> = () => {
  return (
    <TouchableOpacity style={{ borderWidth: 1 }}>
      <Text>Loan</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {},
});
