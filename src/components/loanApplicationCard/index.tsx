import React, { FC } from 'react';
import { Text } from '../text';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { colors } from '@theme';
import { ILoanApplication } from '@constants/types';
import { Row } from '../layout/layout';
import { useTranslation } from '@hooks';

export interface Props {
  loan: ILoanApplication;
  onPress: () => void;
}

export const LoanApplicationCard: FC<Props> = ({ onPress, loan }) => {
  const { t } = useTranslation();

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text size={20} bold>
        {loan?.fullName}
      </Text>

      <Row justify='space-between' align='flex-end'>
        <View>
          <Text>{t('loans.amount')}</Text>
          <Text color={colors.primary} bold size={24}>
            ${loan?.loanAmount}
          </Text>
          <Text>{t('loans.for').replace('{0}', `${loan?.loanPurpose}`)}</Text>
        </View>
      </Row>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: colors.borderGrey,
    borderWidth: 1,
    borderRadius: 10,
    minHeight: 139,
    padding: 16,
    paddingBottom: 12,
    justifyContent: 'space-between',
  },
});
