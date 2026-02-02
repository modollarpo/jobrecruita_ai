import { View, Text, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';

// Example notifications data
const notifications = [
  { message: 'Your application for Frontend Developer was viewed.', time: '2h ago' },
  { message: 'New job match: AI Engineer at AI Labs.', time: '1d ago' },
];

// Notifications page with modern design and push notification placeholder
export default function NotificationsScreen() {
  const [loading, setLoading] = useState(true);
  const [notifs, setNotifs] = useState(notifications);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const clearNotifications = () => setNotifs([]);

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-white dark:bg-black">
        <ActivityIndicator size="large" color="#2563eb" />
        <Text className="mt-4 text-gray-500">Loading notifications...</Text>
      </View>
    );
  }

  return (
    <ScrollView className="flex-1 bg-white dark:bg-black px-4 pt-8">
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-2xl font-bold">Notifications</Text>
        <TouchableOpacity onPress={clearNotifications} className="px-3 py-1 bg-gray-300 dark:bg-gray-700 rounded">
          <Text className="text-gray-700 dark:text-gray-200">Clear</Text>
        </TouchableOpacity>
      </View>
      {notifs.length === 0 ? (
        <Text className="text-gray-400">No notifications yet.</Text>
      ) : notifs.map((n, idx) => (
        <View key={idx} className="mb-6 p-4 rounded-xl bg-green-50 dark:bg-green-900">
          <Text className="text-base">{n.message}</Text>
          <Text className="text-xs text-gray-400 mt-1">{n.time}</Text>
        </View>
      ))}
      {/* TODO: Integrate push notification service */}
    </ScrollView>
  );
}
