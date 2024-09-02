import { SafeAreaView, View, ViewProps, ViewStyle } from 'react-native';
import React, { FC, ReactNode } from 'react';

export const Center: FC<ViewProps> = ({ children }) => (
  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
    {children}
  </View>
);

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

interface RowProps extends ViewProps {
  mt?: number;
  mb?: number;
  bg?: string;
  fullWidth?: boolean;
  justify?: flexAlign;
  align?: flexAlign;
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
}

export const Row: FC<RowProps> = ({
  fullWidth,
  mt,
  mb,
  align,
  justify,
  bg,
  children,
}) => {
  return (
    <View
      style={{
        width: fullWidth ? '100%' : 'auto',
        flexDirection: 'row',
        marginTop: mt,
        marginBottom: mb,
        backgroundColor: bg || 'transparent',
        justifyContent: justify,
        alignItems: align,
      }}
    >
      {children}
    </View>
  );
};
export const Column: FC<RowProps> = ({
  fullWidth,
  mt,
  mb,
  align,
  justify,
  bg,
  children,
}) => {
  return (
    <View
      style={{
        width: fullWidth ? '100%' : 'auto',
        flexDirection: 'column',
        marginTop: mt,
        marginBottom: mb,
        backgroundColor: bg,
        justifyContent: justify,
        alignItems: align,
      }}
    >
      {children}
    </View>
  );
};

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

export const Footer: FC<ViewProps> = ({ children }) => (
  <SafeAreaView style={{ position: 'absolute', bottom: 0 }}>
    {children}
  </SafeAreaView>
);
