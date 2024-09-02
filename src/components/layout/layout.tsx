import { Platform, SafeAreaView, View, ViewStyle } from 'react-native';
import styled from 'styled-components/native';
import React, { ReactNode } from 'react';
import { colors } from '@theme';
import { StatusBar } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { IPlatforms } from '@constants/types';

export const Center = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

type flexAlign =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around';

export function Margin({
  mb,
  ml,
  mr,
  mt,
  children,
  style,
}: {
  [key: string]: number | Element | ViewStyle | ReactNode; //could just extend ViewProps
  style?: ViewStyle;
  children?: ReactNode;
}) {
  return (
    <View
      style={[
        {
          marginTop: mt as number,
          marginBottom: mb as number,
          marginLeft: ml as number,
          marginRight: mr as number,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}

interface RowProps {
  marginTop?: number;
  marginBottom?: number;
  background?: string;
  fullWidth?: boolean;
  justify?: flexAlign;
  align?: flexAlign;
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
}

export const Row = styled.View<RowProps>`
  width: ${({ fullWidth }: RowProps) => (fullWidth ? '100%' : 'auto')};
  flex-direction: row;
  margin-top: ${({ marginTop }: RowProps) => marginTop || '0'}px;
  margin-bottom: ${({ marginBottom }: RowProps) => marginBottom || '0'}px;
  background-color: ${({ background }: RowProps) =>
    background || 'transparent'};
  justify-content: ${({ justify }: RowProps) => justify || 'flex-start'};
  align-items: ${({ align }: RowProps) => align || 'flex-start'};
  flex-wrap: ${({ flexWrap }: RowProps) => flexWrap || 'wrap'};
`;

export const Column = styled.View<RowProps>`
  width: ${({ fullWidth }: RowProps) => (fullWidth ? '100%' : 'auto')};
  flex-direction: column;
  margin-top: ${({ marginTop }: RowProps) => marginTop || '0'}px;
  margin-bottom: ${({ marginBottom }: RowProps) => marginBottom || '0'}px;
  background-color: ${({ background }: RowProps) =>
    background || 'transparent'};
  justify-content: ${({ justify }: RowProps) => justify || 'flex-start'};
  align-items: ${({ align }: RowProps) => align || 'flex-start'};
`;

export function Padding({
  pb,
  pl,
  pr,
  pt,
  p,
  children,
  style,
}: {
  [key: string]: number | ReactNode | ViewStyle;
  style?: ViewStyle;
  children?: ReactNode;
}) {
  return (
    <View
      style={[
        {
          paddingTop: (p || pt) as number,
          paddingBottom: (p || pb) as number,
          paddingLeft: (p || pl) as number,
          paddingRight: (p || pr) as number,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}

const padding =
  Platform.OS === IPlatforms.ANDROID ? StatusBar.currentHeight : 0;

export const Container = ({
  children,
  padded,
  light,
  bg,
  style,
  extraScrollHeight = 120,
}: any) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: light ? colors.static : colors.primary,
      }}
    >
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        keyboardShouldPersistTaps='handled'
        scrollEnabled
        // scrollToOverflowEnabled
        style={[
          {
            flex: 1,
            backgroundColor: bg || colors.greyBG,
            paddingTop: padded ? padding : 0,
          },
        ]}
        extraScrollHeight={extraScrollHeight}
        contentContainerStyle={style}
      >
        <StatusBar
          animated={true}
          barStyle={light ? 'dark-content' : 'light-content'}
          backgroundColor={light ? colors.static : colors.primary}
        />

        {children}
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
