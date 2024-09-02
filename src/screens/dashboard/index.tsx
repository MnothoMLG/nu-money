import React, { useEffect } from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import { colors } from '@theme';
import {
  Footer,
  Text,
  AppButton,
  LoanCard,
  Margin,
  Loader,
  Center,
} from '@components';
import { useLoading, useTranslation } from '@hooks';
import { useNavigation } from '@react-navigation/native';

import { routes } from '@navigation/routes';
import { GenericMainStackScreenProps } from '@navigation/types';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchLoanOffersRequest,
  GET_LOAN_PRODUCTS_LOADING_KEY,
} from '@store/actions';
import { getAllLoanProducts } from '@store/loans/selectors';

const Dashboard = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigation =
    useNavigation<GenericMainStackScreenProps<routes.DASHBOARD>>();
  const loading = useLoading(GET_LOAN_PRODUCTS_LOADING_KEY);
  const loanProducts = useSelector(getAllLoanProducts);

  console.log({ loanProducts });
  useEffect(() => {
    dispatch(fetchLoanOffersRequest());
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={loanProducts}
        ListHeaderComponent={
          <Text size={29} mb={42} xtraBold>
            {t('dashboard.heading')}
          </Text>
        }
        style={styles.list}
        renderItem={({ item }) => (
          <LoanCard
            loan={item}
            onPress={() => {
              navigation.navigate(routes.APPLY);
            }}
          />
        )}
        ListEmptyComponent={
          <Center>
            <Text>Looks a bit empty</Text>
          </Center>
        }
        ItemSeparatorComponent={() => <Margin mt={16} />}
      />

      <Footer style={{ backgroundColor: 'red', height: 30, paddingBottom: 40 }}>
        <AppButton fullWidth label={t('dashboard.apply').toLocaleUpperCase()} />
      </Footer>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.static,
    padding: 24,
    alignItems: 'center',
  },
  list: { padding: 24, width: '100%' },
});
