import { SafeAreaView, View } from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { HandShakeIcon } from '@assets';
import { colors } from '@theme';
import {
  GenericMainStackScreenProps,
  GenericProfileStackRouteProps,
} from '@navigation/types';
import { AppButton, Center, Footer, Margin, Text } from '@components';
import { useTranslation } from '@hooks';
import { routes } from '@navigation/routes';
import styles from './styles';

const Confirmation = () => {
  const { t } = useTranslation();
  const navigation =
    useNavigation<GenericMainStackScreenProps<routes.CONFIRMATION>>();
  const { params } =
    useRoute<GenericProfileStackRouteProps<routes.CONFIRMATION>>();

  return (
    <View style={styles.container}>
      <Center>
        <Margin mt={102} />
        <Center style={styles.handshake}>
          <HandShakeIcon width={200} height={200} color={colors.primary} />
        </Center>

        <Text size={20} bold mt={30} align='center'>
          {params?.message || t('loans.success')}
        </Text>
      </Center>

      <Footer style={styles.footer}>
        <AppButton
          onPress={() => {
            navigation.navigate(routes.DASHBOARD);
          }}
          fullWidth
          label={t('common.Ok')}
        />
      </Footer>
    </View>
  );
};

export default Confirmation;
