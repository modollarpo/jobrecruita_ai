import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { DigitalTwinCard } from '../components/DigitalTwinCard';

import { apiFetch } from '../../shared/utils/api';

function SkillHeatmap({ skills }: { skills: { name: string; score: number }[] }) {
  return (
    <View className="flex-row flex-wrap mt-2">
      {skills.map((s, idx) => (
        <View key={idx} className="mr-2 mb-2">
          <Text className="text-xs text-gray-500">{s.name}</Text>
          <View className="h-2 rounded bg-blue-200 dark:bg-blue-900" style={{ width: 60 }}>
            <View className="h-2 rounded bg-blue-600 dark:bg-blue-300" style={{ width: `${s.score}%` }} />
          </View>
        </View>
      ))}
    </View>
  );
}

export default function CandidateProfileScreen() {
  const [loading, setLoading] = useState(true);
  const [candidate, setCandidate] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiFetch('http://localhost:3000/api/candidates/demo-candidate-id')
      .then((data) => setCandidate(data))
      .catch(() => setError('Failed to load candidate profile'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center bg-white dark:bg-black px-6">
        <Text className="text-gray-500">Loading candidate profile...</Text>
      </View>
    );
  }
  if (error) {
    return (
      <View className="flex-1 items-center justify-center bg-white dark:bg-black px-6">
        <Text className="text-red-500">{error}</Text>
      </View>
    );
  }
  if (!candidate) {
    return (
      <View className="flex-1 items-center justify-center bg-white dark:bg-black px-6">
        <Text className="text-gray-500">No candidate found.</Text>
      </View>
    );
  }
  return (
    <ScrollView className="flex-1 bg-white dark:bg-black px-4 pt-8">
      <View className="mb-6 p-6 rounded-xl bg-gray-100 dark:bg-gray-800">
        <Text className="text-2xl font-bold mb-1">{candidate.user?.email || candidate.name}</Text>
        <Text className="text-lg text-blue-700 dark:text-blue-300 mb-2">{candidate.title || 'Candidate'}</Text>
        <Text className="text-gray-600 dark:text-gray-300 mb-4">{candidate.summary || ''}</Text>
        <Text className="text-base font-semibold mb-1">Skills</Text>
        <SkillHeatmap skills={candidate.skills || []} />
        <Text className="mt-4 text-blue-700 dark:text-blue-300 font-bold">AI Match Score: {candidate.aiScore || 'N/A'}</Text>
        <DigitalTwinCard
          candidate={{
            name: candidate.user?.email || candidate.name,
            skills: (candidate.skills || []).map(s => ({ name: s.name, level: s.score })),
            auditionAvailable: true,
          }}
          onSimulate={() => alert('Launching spatial audition overlay...')}
        />
      </View>
      <View className="mb-6 p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
        <Text className="text-base font-semibold mb-2">CV & Video Pitch</Text>
        <TouchableOpacity className="mb-2 bg-blue-600 rounded px-4 py-2">
          <Text className="text-white text-center">View CV</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-green-600 rounded px-4 py-2">
          <Text className="text-white text-center">Watch Video Pitch</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
