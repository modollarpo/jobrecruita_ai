import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useState } from 'react';

// Example auto-apply workflow data
const jobs = [
  { title: 'Frontend Developer', company: 'TechCorp', status: 'pending' },
  { title: 'AI Engineer', company: 'AI Labs', status: 'applied' },
];

export default function AutoApplyScreen() {
  const [loading, setLoading] = useState(false);
  const [applied, setApplied] = useState(jobs);

  const handleAutoApply = (idx: number) => {
    setLoading(true);
    setTimeout(() => {
      setApplied((prev) => prev.map((j, i) => i === idx ? { ...j, status: 'applied' } : j));
      setLoading(false);
    }, 1000);
  };

  return (
    <ScrollView className="flex-1 bg-white dark:bg-black px-4 pt-8">
      <Text className="text-2xl font-bold mb-4">Auto-Apply Workflow</Text>
      {applied.length === 0 ? (
        <Text className="text-gray-400">No jobs to auto-apply.</Text>
      ) : applied.map((job, idx) => (
        <View key={idx} className="mb-6 p-4 rounded-xl bg-blue-50 dark:bg-blue-900 flex-row justify-between items-center">
          <View>
            <Text className="text-lg font-semibold">{job.title}</Text>
            <Text className="text-gray-500">{job.company}</Text>
            <Text className="text-xs mt-1">Status: <Text className={job.status === 'applied' ? 'text-green-600' : 'text-yellow-600'}>{job.status}</Text></Text>
          </View>
          {job.status === 'pending' && (
            <TouchableOpacity onPress={() => handleAutoApply(idx)} className="ml-4 px-3 py-1 bg-blue-600 rounded" disabled={loading}>
              {loading ? <ActivityIndicator color="#fff" /> : <Text className="text-white">Auto-Apply</Text>}
            </TouchableOpacity>
          )}
        </View>
      ))}
    </ScrollView>
  );
}
