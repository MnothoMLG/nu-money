import { routes } from './routes';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type MainStackParamList = {
  [routes.DASHBOARD]: undefined;
  [routes.APPLY]: undefined;
};

export type GenericMainStackScreenProps<T extends keyof MainStackParamList> =
  NativeStackScreenProps<MainStackParamList, T>;
