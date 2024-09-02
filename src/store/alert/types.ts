import { FC } from 'react';
import { SvgProps } from 'react-native-svg';

export interface IButton {
  label: string;
  onPress: () => void;
  icon?: FC<SvgProps>;
}

export interface AlertState {
  type: 'confirm' | 'info';
  message: string;
  title: string;
  primary_btn: IButton;
  secondary_btn?: IButton;
  shown?: boolean;
}
