import React, { ReactNode } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, ViewStyle, Platform, useColorScheme, KeyboardAvoidingView } from 'react-native';

interface ScreenProps {
  children: ReactNode;
  style?: ViewStyle | ViewStyle[];
  keyboardAvoiding?: boolean;
}

export function Screen({ children, style, keyboardAvoiding = false }: ScreenProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const backgroundColor = isDark ? '#020617' : '#fff';
  const barStyle = isDark ? 'light-content' : 'dark-content';

  const content = (
    <SafeAreaView style={[styles.root, { backgroundColor }, style]}>
      <StatusBar barStyle={barStyle} backgroundColor={backgroundColor} />
      {children}
    </SafeAreaView>
  );

  if (keyboardAvoiding) {
    return (
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 24}
      >
        {content}
      </KeyboardAvoidingView>
    );
  }
  return content;
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 16,
  },
});
