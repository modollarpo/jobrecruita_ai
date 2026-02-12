import { View, Text, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';

import { apiFetch } from '../../shared/utils/api';

// Favorites page with modern design and micro-interactions
export default function FavoritesScreen() {
  const [loading, setLoading] = useState(true);
  const [saved, setSaved] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiFetch('http://localhost:3000/api/applications')
      .then((data) => setSaved(data))
      .catch(() => setError('Failed to load favorites'))
      .finally(() => setLoading(false));
  }, []);

  const removeFavorite = (idx: number) => {
    setSaved((prev) => prev.filter((_, i) => i !== idx));
    // Optionally, call backend to remove favorite
  };

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-white dark:bg-black">
        <ActivityIndicator size="large" color="#2563eb" />
        <Text className="mt-4 text-gray-500">Loading favorites...</Text>
      </View>
    );
  }
  if (error) {
    return (
      <View className="flex-1 justify-center items-center bg-white dark:bg-black">
        <Text className="mt-4 text-red-500">{error}</Text>
      </View>
    );
  }
  return (
    <ScrollView className="flex-1 bg-white dark:bg-black px-4 pt-8">
      <Text className="text-2xl font-bold mb-4">Saved Jobs</Text>
      {saved.length === 0 ? (
        <Text className="text-gray-400">No favorites yet.</Text>
      ) : saved.map((f, idx) => (
        <View key={idx} className="mb-6 p-4 rounded-xl bg-yellow-50 dark:bg-yellow-900 flex-row justify-between items-center">
          <View>
            <Text className="text-lg font-semibold">{f.job?.title || f.job || 'Unknown Job'}</Text>
            <Text className="text-gray-500">{f.job?.company || f.company || ''}</Text>
          </View>
          <TouchableOpacity onPress={() => removeFavorite(idx)} className="ml-4 px-3 py-1 bg-red-600 rounded">
            <Text className="text-white">Remove</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}
