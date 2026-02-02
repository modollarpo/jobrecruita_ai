// Onboarding entry point with 3 animated steps
import { View, Text } from 'react-native';
import { AnimatedOnboarding } from '../../components/AnimatedOnboarding';

export default function OnboardingScreen() {
  return (
    <View className="flex-1 bg-white dark:bg-black">
      <AnimatedOnboarding />
    </View>
  );
}
