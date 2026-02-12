import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ComplianceStatusBarProps {
  status: string;
  daysLeft: number;
}

export function ComplianceStatusBar({ status, daysLeft }: ComplianceStatusBarProps) {
  const [countdown, setCountdown] = useState(daysLeft);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => setCountdown(c => c - 1), 86400000); // 1 day
      return () => clearInterval(timer);
    }
  }, [countdown]);

  return (
    <View style={styles.bar}>
      <Text style={styles.status}>Compliance Status: <Text style={styles.active}>{status}</Text></Text>
      <Text style={styles.timer}>Update in <Text style={styles.days}>{countdown} days</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#0ea5e9',
    paddingVertical: 12,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    elevation: 8,
  },
  status: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  active: {
    color: '#22c55e',
    fontWeight: '700',
  },
  timer: {
    color: '#fff',
    fontSize: 14,
  },
  days: {
    color: '#fbbf24',
    fontFamily: 'monospace',
    fontWeight: '700',
  },
});
