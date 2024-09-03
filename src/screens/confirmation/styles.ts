import { colors } from '@theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.static,
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    paddingHorizontal: 24,
  },
  footer: { width: '100%', paddingHorizontal: 24 },
  heading: { alignSelf: 'flex-start' },
  columnWrapper: {
    width: '100%',
    justifyContent: 'space-between',
  },
  handshake: {
    backgroundColor: '#e0ffed',
    borderRadius: 300,
    width: 300,
    height: 300,
  },
  storeName: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
});

export default styles;
