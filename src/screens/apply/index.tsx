import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Formik } from 'formik';
import { colors } from '@theme';
import { AppButton, Input, Text, Margin, Padding } from '@components';
import { applicationFormValidation } from '@util/validation';
import { useLoading, useTranslation } from '@hooks';
import {
  APPLY_FOR_LOAN_LOADING_KEY,
  applyForLoanRequest,
} from '@store/actions';
import { useDispatch } from 'react-redux';
import { ILoanApplicationPayload } from '@constants/types';

const ApplyForALoan = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const loading = useLoading(APPLY_FOR_LOAN_LOADING_KEY);

  const submitLoadApplication = (values: ILoanApplicationPayload) => {
    dispatch(applyForLoanRequest({ ...values }));
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Keyboard aware scroll */}
      <Text ml={24} mt={36} bold size={32}>
        {t('dashboard.apply')}
      </Text>
      <Formik
        validateOnMount
        initialValues={{
          full_name: '',
          email: '',
          loan_amount: 0,
          loan_purpose: '',
        }}
        onSubmit={() => {}}
        validationSchema={applicationFormValidation}
      >
        {({ handleChange, errors, values, isValid }) => (
          <Padding pt={42} pb={24} pr={24} pl={24}>
            <Input
              label={t('common.full_name')}
              placeholder={t('common.full_name')}
              value={values.full_name}
              error={errors.full_name}
              onChangeText={handleChange('full_name')}
            />
            <Margin mb={16} />
            <Input
              label={t('common.email')}
              placeholder={t('form.email')}
              value={values.email}
              error={errors.email}
              keyboardType='email-address'
              onChangeText={handleChange('email')}
            />
            <Margin mb={16} />
            <Input
              label={t('loans.amount')}
              placeholder={t('form.amount')}
              value={values.loan_amount}
              keyboardType='number-pad'
              error={errors.loan_amount}
              onChangeText={handleChange('loan_amount')}
            />
            <Margin mb={16} />

            <Input
              label={t('loans.purpose')}
              placeholder={t('loans.purpose')}
              value={values.loan_purpose}
              error={errors.loan_purpose}
              onChangeText={handleChange('loan_purpose')}
            />

            <Margin mb={56} />
            <AppButton
              fullWidth
              style={{ height: 56 }}
              disabled={!isValid}
              loading={loading}
              br={16}
              onPress={() => {
                submitLoadApplication(values);
              }}
              label={t('dashboard.apply').toLocaleUpperCase()}
            />
          </Padding>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default ApplyForALoan;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.static,
    flex: 1,
  },
});
