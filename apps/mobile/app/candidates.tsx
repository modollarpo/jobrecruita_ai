import { View, Text, ScrollView, ActivityIndicator, TextInput, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';

// Example candidate data
const candidates = [
  { name: 'Alice Johnson', skills: ['React', 'TypeScript', 'UI/UX'], heatmap: [80, 90, 70], aiScore: 92 },
  { name: 'Bob Smith', skills: ['Python', 'ML', 'Data Science'], heatmap: [95, 85, 88], aiScore: 88 },
  { name: 'Carol Lee', skills: ['Figma', 'Design', 'Branding'], heatmap: [75, 80, 92], aiScore: 85 },
];

// Skill heatmap component
function SkillHeatmap({ heatmap }: { heatmap: number[] }) {
  return (
    <View className="flex-row space-x-2 mt-2">
      {heatmap.map((score, idx) => (
        <View
          key={idx}
          className="h-3 rounded"
          style={{ width: 40, backgroundColor: `rgba(37,99,235,${score / 100})` }}
        />
      ))}
    </View>
  );
}

// Candidate list page with filters, search, and skeleton loaders
export default function CandidatesScreen() {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const filtered = candidates.filter(
    (c) =>
      (!search || c.name.toLowerCase().includes(search.toLowerCase())) &&
      (!filter || c.skills.includes(filter))
  );

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-white dark:bg-black">
        <ActivityIndicator size="large" color="#2563eb" />
        <Text className="mt-4 text-gray-500">Loading candidates...</Text>
      </View>
    );
  }

  return (
    <ScrollView className="flex-1 bg-white dark:bg-black px-4 pt-8">
      <Text className="text-2xl font-bold mb-4">Candidates</Text>
      {/* Search and filter bar */}
      <View className="flex-row mb-4 space-x-2">
        <TextInput
          className="flex-1 border rounded px-3 py-2 dark:bg-gray-800 dark:text-white"
          placeholder="Search by name"
          value={search}
          onChangeText={setSearch}
          placeholderTextColor="#888"
        />
        <TouchableOpacity
          className="bg-blue-600 rounded px-4 justify-center"
          onPress={() => setFilter(filter ? '' : 'React')}
        >
          <Text className="text-white">{filter ? 'Clear' : 'React'}</Text>
        </TouchableOpacity>
      </View>
      {/* Candidate cards */}
      {filtered.length === 0 ? (
        <Text className="text-gray-400">No candidates found.</Text>
      ) : (
        filtered.map((c, idx) => (
          <View key={idx} className="mb-6 p-4 rounded-xl bg-gray-100 dark:bg-gray-800">
            <View className="flex-row justify-between items-center mb-2">
              <Text className="text-lg font-semibold">{c.name}</Text>
              <Text className="text-blue-700 dark:text-blue-300 font-bold">AI Score: {c.aiScore}</Text>
            </View>
            <Text className="text-gray-500">Skills: {c.skills.join(', ')}</Text>
            <SkillHeatmap heatmap={c.heatmap} />
          </View>
        ))
      )}
    </ScrollView>
  );
}
