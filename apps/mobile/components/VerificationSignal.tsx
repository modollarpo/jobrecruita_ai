import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface VerificationSignalProps {
  verified: boolean;
  zkpTime?: number;
}

export function VerificationSignal({ verified, zkpTime = 1.02 }: VerificationSignalProps) {
  const [glowAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    if (verified) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(glowAnim, {
            toValue: 1,
            duration: 600,
            useNativeDriver: true,
          }),
          Animated.timing(glowAnim, {
            toValue: 0,
            duration: 600,
            useNativeDriver: true,
          }),
        ])
      ).start();
    }
  }, [verified]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.shield,
          verified && {
            shadowColor: '#14b8a6',
            shadowOpacity: glowAnim.interpolate({ inputRange: [0, 1], outputRange: [0.3, 0.8] }),
            shadowRadius: glowAnim.interpolate({ inputRange: [0, 1], outputRange: [8, 16] }),
          },
        ]}
      >
        <MaterialIcons name="security" size={32} color={verified ? '#14b8a6' : '#64748b'} />
      </Animated.View>
      {verified && (
        <Text style={styles.verifiedText}>
          ZKP Verified: <Text style={styles.mono}>{zkpTime.toFixed(2)}s</Text>
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  shield: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 8,
    marginRight: 10,
    shadowColor: '#64748b',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  verifiedText: {
    color: '#14b8a6',
    fontWeight: '600',
    fontSize: 14,
    fontFamily: 'System',
  },
  mono: {
    fontFamily: 'monospace',
    fontSize: 14,
    color: '#14b8a6',
  },
});
