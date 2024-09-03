import React, { useEffect } from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { colors } from '@theme';
import {
  Footer,
  Text,
  AppButton,
  LoanCard,
  Margin,
  Center,
  Padding,
  LoanApplicationCard,
  Loader,
  BackButton,
} from '@components';
import { useLoading, useTranslation } from '@hooks';
import { useNavigation } from '@react-navigation/native';

import { routes } from '@navigation/routes';
import { GenericMainStackScreenProps } from '@navigation/types';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchLoanApplicationsRequest,
  GET_LOAN_APPLICATIONS_LOADING_KEY,
} from '@store/actions';
import { getAllLoanApplications } from '@store/loans/selectors';
import { showToast } from '@util';
import { EButtonVariants, EToastTypes } from '@constants/types';

const LoanApplicationsList = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigation =
    useNavigation<GenericMainStackScreenProps<routes.DASHBOARD>>();
  const loading = useLoading(GET_LOAN_APPLICATIONS_LOADING_KEY);
  const loanApplications = useSelector(getAllLoanApplications);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(fetchLoanApplicationsRequest());
    });
    return unsubscribe;
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <SafeAreaView style={styles.container}>
      <Margin mt={24} />
      <BackButton />
      <FlatList
        data={loanApplications}
        ListHeaderComponent={
          <Text size={29} mb={42} xtraBold>
            {t('loans.prev')}
          </Text>
        }
        style={styles.list}
        contentContainerStyle={styles.items}
        renderItem={({ item }) => (
          <LoanApplicationCard
            loan={item}
            onPress={() => {
              showToast({
                type: EToastTypes.SUCCESS,
                message: 'Coming soon :]',
              });
            }}
          />
        )}
        ListEmptyComponent={
          !loading ? (
            <Center>
              <Text mt={36} mb={12}>
                {t('common.noResults')}
              </Text>
              <AppButton
                variant={EButtonVariants.SECONDARY}
                label={` ${t('common.refresh')} `}
                br={5}
                style={styles.rfrsh}
                onPress={() => dispatch(fetchLoanApplicationsRequest())}
                loading={loading}
              />
            </Center>
          ) : null
        }
        ItemSeparatorComponent={() => <Margin mt={16} />}
      />

      <Footer>
        <Padding pl={24} pr={24}>
          <AppButton
            onPress={() => {
              navigation.navigate(routes.APPLY);
            }}
            br={10}
            label={t('dashboard.apply').toLocaleUpperCase()}
          />
        </Padding>
      </Footer>
    </SafeAreaView>
  );
};

export default LoanApplicationsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.static,
    padding: 24,
  },
  items: {
    paddingBottom: 106,
  },
  rfrsh: { width: 90 },
  list: { padding: 24, width: '100%' },
});
