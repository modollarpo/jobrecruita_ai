import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';
import { JobSwipeCard } from '../components/JobSwipeCard';

// Example data for dashboard
const jobs = [
  { title: 'Frontend Developer', company: 'TechCorp', description: 'React, TypeScript, TailwindCSS', logoUrl: '' },
  { title: 'AI Engineer', company: 'AI Labs', description: 'Python, ML, Deep Learning', logoUrl: '' },
  { title: 'Product Designer', company: 'DesignPro', description: 'Figma, UX, UI', logoUrl: '' },
];
const activity = [
  { type: 'applied', message: 'You applied to Frontend Developer at TechCorp', time: '2h ago' },
  { type: 'match', message: 'AI matched you to AI Engineer at AI Labs', time: '1d ago' },
];
const aiInsights = {
  matches: 3,
  autoApplied: 1,
  interviews: 0,
};

// Dashboard page with AI insights, activity feed, jobs/candidates overview
export default function DashboardScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-white dark:bg-black">
        <ActivityIndicator size="large" color="#2563eb" />
        <Text className="mt-4 text-gray-500">Loading dashboard...</Text>
      </View>
    );
  }

  return (
    <ScrollView className="flex-1 bg-white dark:bg-black px-4 pt-8">
      {/* AI Insights */}
      <View className="mb-6 flex-row justify-between">
        <View className="flex-1 bg-blue-100 dark:bg-blue-900 rounded-xl p-4 mr-2">
          <Text className="text-xs text-blue-700 dark:text-blue-300">AI Matches</Text>
          <Text className="text-2xl font-bold text-blue-700 dark:text-blue-300">{aiInsights.matches}</Text>
        </View>
        <View className="flex-1 bg-green-100 dark:bg-green-900 rounded-xl p-4 mx-1">
          <Text className="text-xs text-green-700 dark:text-green-300">Auto-Applied</Text>
          <Text className="text-2xl font-bold text-green-700 dark:text-green-300">{aiInsights.autoApplied}</Text>
        </View>
        <View className="flex-1 bg-yellow-100 dark:bg-yellow-900 rounded-xl p-4 ml-2">
          <Text className="text-xs text-yellow-700 dark:text-yellow-300">Interviews</Text>
          <Text className="text-2xl font-bold text-yellow-700 dark:text-yellow-300">{aiInsights.interviews}</Text>
        </View>
      </View>

      {/* Recommended Jobs */}
      <Text className="text-lg font-bold mb-2">Recommended Jobs</Text>
      {jobs.map((job, idx) => (
        <JobSwipeCard key={idx} job={job} />
      ))}

      {/* Activity Feed */}
      <Text className="text-lg font-bold mt-8 mb-2">Activity Feed</Text>
      {activity.map((a, idx) => (
        <View key={idx} className="mb-4 p-3 rounded-lg bg-gray-100 dark:bg-gray-800">
          <Text className="text-base text-gray-700 dark:text-gray-200">{a.message}</Text>
          <Text className="text-xs text-gray-400 mt-1">{a.time}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
