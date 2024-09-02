import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import { colors } from '@theme';
import { Footer, Text, AppButton, LoanCard, Margin } from '@components';
import { useTranslation } from '@hooks';
import { useNavigation } from '@react-navigation/native';

import { routes } from '@navigation/routes';
import { GenericMainStackScreenProps } from '@navigation/types';

const Dashboard = () => {
  const { t } = useTranslation();
  const navigation =
    useNavigation<GenericMainStackScreenProps<routes.DASHBOARD>>();
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={[1, 1]}
        ListHeaderComponent={
          <Text size={29} mb={42} xtraBold>
            {t('dashboard.heading')}
          </Text>
        }
        style={styles.list}
        renderItem={({ item }) => (
          <LoanCard
            onPress={() => {
              navigation.navigate(routes.APPLY);
            }}
          />
        )}
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
