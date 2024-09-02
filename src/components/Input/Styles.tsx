import { StyleSheet } from 'react-native';
import { colors } from '../../theme';

export default StyleSheet.create({
  container: {
    height: 52,
    flexWrap: 'nowrap',
    flexDirection: 'row',
    backgroundColor: colors.static,
    width: '100%',
    alignItems: 'center',
    padding: 12,
    borderColor: colors.static,
    borderWidth: 1,
  },
  disabled: {
    backgroundColor: colors.greyBG,
  },
  search: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 48,
    flex: 1,
    fontFamily: 'HelveticaNeue',
    textAlignVertical: 'center',
    fontSize: 16,
    color: colors.grey100,
  },
  centerText: {
    textAlign: 'center',
  },
  focused: {
    borderColor: colors.primary70,
    backgroundColor: colors.static,
    fontFamily: 'HelveticaNeue',
    color: colors.grey100,
  },
  errorInput: {
    backgroundColor: colors.primary10,
    borderColor: colors.primary70,
  },
  leftAlign: {
    alignSelf: 'flex-start',
  },
  required: {
    color: colors.primary,
    fontSize: 16,
    marginLeft: 3,
  },
});
