import { View, Text, Animated, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import { Screen } from '../components/Screen';
import { Button } from '../components/Button';

// Onboarding steps with modern design and animation
const steps = [
  {
    title: 'Welcome to JobRecruita',
    description: 'AI-powered job matching and career acceleration.',
  },
  {
    title: 'Swipe to Match',
    description: 'Discover jobs and candidates with a swipe. Smart, fast, and fun.',
  },
  {
    title: 'Auto-Apply & Insights',
    description: 'Let AI auto-apply and get real-time analytics on your job search.',
  },
];

export default function OnboardingScreen() {
  const [step, setStep] = useState(0);
  const router = useRouter();
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const nextStep = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
    }).start(() => {
      setStep((prev) => prev + 1);
      fadeAnim.setValue(0);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 250,
        useNativeDriver: true,
      }).start();
    });
  };

  return (
    <Screen>
      <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
        <Text style={styles.title}>{steps[step].title}</Text>
        <Text style={styles.description}>{steps[step].description}</Text>
      </Animated.View>
      <View style={styles.dotsRow}>
        {steps.map((_, i) => (
          <View key={i} style={[styles.dot, i === step ? styles.dotActive : styles.dotInactive]} />
        ))}
      </View>
      <Button
        title={step < steps.length - 1 ? 'Next' : 'Get started'}
        fullWidth
        onPress={() => {
          if (step < steps.length - 1) nextStep();
          else router.replace('/auth/login');
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1e293b',
    textAlign: 'center',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#475569',
    textAlign: 'center',
  },
  dotsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 32,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  dotActive: {
    backgroundColor: '#0ea5e9',
  },
  dotInactive: {
    backgroundColor: '#1f2937',
  },
});
