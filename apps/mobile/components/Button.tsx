import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  fullWidth?: boolean;
  disabled?: boolean;
}

export function Button({ title, onPress, variant = 'primary', fullWidth = false, disabled = false }: ButtonProps) {
  const baseStyles: ViewStyle[] = [styles.base];

  if (variant === 'primary') baseStyles.push(styles.primary);
  if (variant === 'secondary') baseStyles.push(styles.secondary);
  if (variant === 'ghost') baseStyles.push(styles.ghost);
  if (fullWidth) baseStyles.push(styles.fullWidth);
  if (disabled) baseStyles.push(styles.disabled);

  return (
    <TouchableOpacity style={baseStyles} onPress={onPress} activeOpacity={0.85} disabled={disabled}>
      <Text style={[styles.label, variant === 'ghost' ? styles.labelGhost : null]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: 999,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {
    backgroundColor: '#0ea5e9',
  },
  secondary: {
    backgroundColor: '#1f2937',
  },
  ghost: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#1f2937',
  },
  fullWidth: {
    alignSelf: 'stretch',
  },
  disabled: {
    opacity: 0.5,
  },
  label: {
    color: '#f9fafb',
    fontWeight: '600',
    fontSize: 16,
  },
  labelGhost: {
    color: '#0f172a',
  },
});
