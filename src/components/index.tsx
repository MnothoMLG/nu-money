import { TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

export { Text } from './text';
export { AppButton } from './appButton';
export { Input } from './Input';
export { LoanCard } from './loanCard';
export { LoanApplicationCard } from './loanApplicationCard';
export { BackButton } from './back';
export { Loader } from './loader';
export { LoadingOverlay } from './loadingOverlay';

export const AnimatedButton =
  Animatable.createAnimatableComponent(TouchableOpacity);
export * from './layout/layout';
