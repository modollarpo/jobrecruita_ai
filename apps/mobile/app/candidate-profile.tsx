import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

// Example candidate profile data
const candidate = {
  name: 'Alice Johnson',
  title: 'Frontend Developer',
  summary: 'Experienced in React, TypeScript, and UI/UX design. Passionate about building beautiful, accessible web apps.',
  skills: [
    { name: 'React', score: 90 },
    { name: 'TypeScript', score: 85 },
    { name: 'UI/UX', score: 80 },
    { name: 'Figma', score: 75 },
  ],
  aiScore: 92,
  cvUrl: '',
  videoPitchUrl: '',
};

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
  return (
    <ScrollView className="flex-1 bg-white dark:bg-black px-4 pt-8">
      <View className="mb-6 p-6 rounded-xl bg-gray-100 dark:bg-gray-800">
        <Text className="text-2xl font-bold mb-1">{candidate.name}</Text>
        <Text className="text-lg text-blue-700 dark:text-blue-300 mb-2">{candidate.title}</Text>
        <Text className="text-gray-600 dark:text-gray-300 mb-4">{candidate.summary}</Text>
        <Text className="text-base font-semibold mb-1">Skills</Text>
        <SkillHeatmap skills={candidate.skills} />
        <Text className="mt-4 text-blue-700 dark:text-blue-300 font-bold">AI Match Score: {candidate.aiScore}</Text>
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
