import { View, Text, Animated, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useRef, useState } from 'react';

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
    <View className="flex-1 items-center justify-center bg-white dark:bg-black px-6">
      <Animated.View style={{ opacity: fadeAnim }} className="w-full items-center">
        <Text className="text-3xl font-bold mb-4 text-center text-blue-700 dark:text-blue-300">
          {steps[step].title}
        </Text>
        <Text className="text-lg text-center text-gray-600 dark:text-gray-300 mb-8">
          {steps[step].description}
        </Text>
      </Animated.View>
      <View className="flex-row mt-6 mb-8 space-x-2">
        {steps.map((_, i) => (
          <View key={i} className={`w-3 h-3 rounded-full ${i === step ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-700'}`} />
        ))}
      </View>
      <TouchableOpacity
        className="bg-blue-600 rounded-full px-8 py-3 mb-4"
        onPress={() => {
          if (step < steps.length - 1) nextStep();
          else router.replace('/auth/login');
        }}
        activeOpacity={0.8}
      >
        <Text className="text-white text-lg font-semibold">
          {step < steps.length - 1 ? 'Next' : 'Get Started'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
