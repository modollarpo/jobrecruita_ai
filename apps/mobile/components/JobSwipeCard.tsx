import { View, Text, Image, StyleSheet, Animated } from 'react-native';

interface JobSwipeCardProps {
  job: {
    title: string;
    company: string;
    description: string;
    logoUrl?: string;
  };
}

export function JobSwipeCard({ job }: JobSwipeCardProps) {
  // Animated values for mobile interactivity
  const pulseBlue = new Animated.Value(1);
  const pulseTeal = new Animated.Value(1);

  Animated.loop(
    Animated.sequence([
      Animated.timing(pulseBlue, { toValue: 1.1, duration: 800, useNativeDriver: true }),
      Animated.timing(pulseBlue, { toValue: 1, duration: 800, useNativeDriver: true }),
    ])
  ).start();
  Animated.loop(
    Animated.sequence([
      Animated.timing(pulseTeal, { toValue: 1.1, duration: 900, useNativeDriver: true }),
      Animated.timing(pulseTeal, { toValue: 1, duration: 900, useNativeDriver: true }),
    ])
  ).start();

  return (
    <View style={styles.glassCard}>
      <View style={styles.glowContainer}>
        <Animated.View style={[styles.glowCircleBlue, { transform: [{ scale: pulseBlue }] }]} />
        <Animated.View style={[styles.glowCircleTeal, { transform: [{ scale: pulseTeal }] }]} />
      </View>
      {job.logoUrl ? <Image source={{ uri: job.logoUrl }} style={styles.logo} /> : null}
      <Text style={styles.title}>{job.title}</Text>
      <Text style={styles.company}>{job.company}</Text>
      <Text style={styles.description}>{job.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  glassCard: {
    backgroundColor: 'rgba(32, 40, 56, 0.6)',
    borderRadius: 20,
    padding: 20,
    marginVertical: 8,
    shadowColor: '#00f0ff',
    shadowOpacity: 0.25,
    shadowRadius: 30,
    shadowOffset: { width: 0, height: 10 },
    borderWidth: 1.5,
    borderColor: '#38bdf8',
    overflow: 'hidden',
    backdropFilter: 'blur(8px)', // For web, not supported in React Native
  },
  glowContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 0,
  },
  glowCircleBlue: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(56, 189, 248, 0.25)',
    position: 'absolute',
    top: 20,
    left: 20,
    shadowColor: '#38bdf8',
    shadowOpacity: 0.7,
    shadowRadius: 30,
    shadowOffset: { width: 0, height: 0 },
  },
  glowCircleTeal: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(20, 184, 166, 0.18)',
    position: 'absolute',
    bottom: 20,
    right: 20,
    shadowColor: '#14b8a6',
    shadowOpacity: 0.6,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 0 },
  },
  logo: {
    width: 40,
    height: 40,
    marginBottom: 12,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#e5e7eb',
  },
  company: {
    fontSize: 14,
    color: '#9ca3af',
    marginTop: 2,
  },
  description: {
    fontSize: 14,
    color: '#cbd5f5',
    marginTop: 12,
  },
});

// Note: For React Native, use Animated API for pulsing effect. For web, use CSS keyframes.
