import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Formik } from 'formik';
import { colors } from '@theme';
import { useTranslation } from '@hooks/useTranslationHook';
import { AppButton, Input, Margin, Padding } from '@components';
import { applicationFormValidation } from '@util/validation';

const ApplyForALoan = () => {
  const { t } = useTranslation();
  return (
    <SafeAreaView style={styles.container}>
      <Formik
        validateOnMount
        initialValues={{
          name: '',
          email: '',
          amount: '',
          purpose: '',
        }}
        onSubmit={() => {}}
        validationSchema={applicationFormValidation}
      >
        {({ handleChange, values }) => (
          <Padding pt={24} pb={24} pr={24} pl={24}>
            <Input />
            <Margin mb={16} />
            <Input
              multiline
              label={t('common.fullName')}
              placeholder={t('common.fullName')}
              value={values.name}
              onChangeText={handleChange('extras')}
            />
            <Margin mb={16} />
            <Input />
            <Margin mb={16} />
            <AppButton
              fullWidth
              style={{ height: 56 }}
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
