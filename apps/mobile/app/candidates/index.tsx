// Candidate List with filters and search
import { View, Text, TextInput, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import { apiFetch } from '../../../shared/utils/api';
import { CandidateProfile } from '../../../shared/types/candidate';

export default function CandidatesScreen() {
  const [candidates, setCandidates] = useState<CandidateProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    apiFetch<CandidateProfile[]>('http://localhost:3000/api/candidates')
      .then(setCandidates)
      .catch(() => setError('Failed to load candidates'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View className="flex-1 bg-white dark:bg-black p-4">
      <Text className="text-2xl font-bold mb-4">Candidates</Text>
      <TextInput className="mb-4 p-2 border rounded" placeholder="Search candidates..." />
      {loading ? (
        <View className="flex-1 items-center justify-center"><Text>Loading...</Text></View>
      ) : error ? (
        <View className="flex-1 items-center justify-center"><Text style={{ color: 'red' }}>{error}</Text></View>
      ) : (
        <ScrollView>
          {candidates.map((c) => (
            <View key={c.id} className="mb-2 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl shadow">
              <Text className="font-semibold">{c.user.email}</Text>
              <Text className="text-gray-500">{c.user.role}</Text>
              {c.cvUrl ? <Text className="text-xs text-blue-500">CV: {c.cvUrl}</Text> : null}
              {c.videoPitch ? <Text className="text-xs text-purple-500">Video Pitch: {c.videoPitch}</Text> : null}
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
}
