import React, { ReactNode } from 'react';
import { View, StatusBar, StyleSheet, ViewStyle } from 'react-native';

interface ScreenProps {
  children: ReactNode;
  style?: ViewStyle | ViewStyle[];
}

export function Screen({ children, style }: ScreenProps) {
  return (
    <View style={[styles.root, style]}>
      <StatusBar barStyle="light-content" />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#020617',
    paddingHorizontal: 24,
    paddingTop: 48,
    paddingBottom: 24,
  },
});
