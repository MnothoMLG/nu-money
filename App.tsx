import { RootNavigation } from '@navigation';
import { store } from '@store';
import { StyleSheet, Text, View } from 'react-native';

import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
