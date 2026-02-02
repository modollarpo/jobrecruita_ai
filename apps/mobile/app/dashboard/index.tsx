// Dashboard: AI insights, activity feed, jobs and candidate overview
import { View, Text, ScrollView } from 'react-native';

export default function DashboardScreen() {
  return (
    <ScrollView className="flex-1 bg-white dark:bg-black p-4">
      <Text className="text-2xl font-bold mb-4">Dashboard</Text>
      {/* AI Insights Card */}
      <View className="mb-4 p-4 bg-blue-50 dark:bg-blue-900 rounded-xl shadow">
        <Text className="font-semibold text-blue-700 dark:text-blue-200">AI Insights</Text>
        <Text className="text-gray-700 dark:text-gray-200">Your top matches and activity trends are here.</Text>
      </View>
      {/* Activity Feed */}
      <View className="mb-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl shadow">
        <Text className="font-semibold text-gray-700 dark:text-gray-200 mb-2">Recent Activity</Text>
        {/* ...activity feed items... */}
      </View>
      {/* Jobs & Candidates Overview */}
      <View className="flex-row justify-between">
        <View className="flex-1 mr-2 p-4 bg-green-50 dark:bg-green-900 rounded-xl shadow">
          <Text className="font-semibold text-green-700 dark:text-green-200">Jobs</Text>
          <Text className="text-2xl font-bold">12</Text>
        </View>
        <View className="flex-1 ml-2 p-4 bg-purple-50 dark:bg-purple-900 rounded-xl shadow">
          <Text className="font-semibold text-purple-700 dark:text-purple-200">Candidates</Text>
          <Text className="text-2xl font-bold">8</Text>
        </View>
      </View>
    </ScrollView>
  );
}
