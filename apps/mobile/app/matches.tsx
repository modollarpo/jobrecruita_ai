import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';

// Placeholder matches data
const matches = [
  { job: 'Frontend Developer', company: 'TechCorp', score: 92 },
  { job: 'AI Engineer', company: 'AI Labs', score: 88 },
];

export default function MatchesScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-white dark:bg-black">
        <ActivityIndicator size="large" color="#2563eb" />
        <Text className="mt-4 text-gray-500">Loading matches...</Text>
      </View>
    );
  }

  return (
    <ScrollView className="flex-1 bg-white dark:bg-black px-4 pt-8">
      <Text className="text-2xl font-bold mb-4">Your Matches</Text>
      {matches.map((m, idx) => (
        <View key={idx} className="mb-6 p-4 rounded-xl bg-blue-50 dark:bg-blue-900">
          <Text className="text-lg font-semibold">{m.job}</Text>
          <Text className="text-gray-500">{m.company}</Text>
          <Text className="mt-2 text-blue-700 dark:text-blue-300 font-bold">AI Match Score: {m.score}%</Text>
        </View>
      ))}
    </ScrollView>
  );
}
