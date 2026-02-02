import { View, Text } from 'react-native';
import { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { apiFetch } from '../../../shared/utils/api';
import { CandidateProfile } from '../../../shared/types/candidate';

export default function CandidateProfileScreen() {
  const { id } = useLocalSearchParams();
  const [candidate, setCandidate] = useState<CandidateProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    apiFetch<CandidateProfile>(`http://localhost:3000/api/candidates/${id}`)
      .then(setCandidate)
      .catch(() => setError('Failed to load candidate'))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <View className="flex-1 items-center justify-center"><Text>Loading...</Text></View>;
  }
  if (error || !candidate) {
    return <View className="flex-1 items-center justify-center"><Text style={{ color: 'red' }}>{error || 'Not found'}</Text></View>;
  }

  return (
    <View className="flex-1 bg-white dark:bg-black p-4">
      <Text className="text-2xl font-bold mb-2">{candidate.user.email}</Text>
      <Text className="mb-2 text-gray-500">{candidate.user.role}</Text>
      {/* Skills heatmap and AI match score visualization here */}
      <View className="my-4 p-4 bg-blue-50 dark:bg-blue-900 rounded-xl">
        <Text className="font-semibold text-blue-700 dark:text-blue-200">AI Match Score: {candidate.aiMatch?.score ?? 'N/A'}%</Text>
      </View>
      {candidate.cvUrl ? <Text className="text-xs text-blue-500">CV: {candidate.cvUrl}</Text> : null}
      {candidate.videoPitch ? <Text className="text-xs text-purple-500">Video Pitch: {candidate.videoPitch}</Text> : null}
      {/* ...other profile details... */}
    </View>
  );
}
