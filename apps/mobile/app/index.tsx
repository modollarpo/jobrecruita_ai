import { View, Text, Button } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-black">
      <Text className="text-2xl font-bold">Welcome to JobRecruita</Text>
      <Link href="/onboarding">
        <Button title="Get Started" />
      </Link>
    </View>
  );
}
