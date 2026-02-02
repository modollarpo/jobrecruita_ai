import { View, Text, Image } from 'react-native';

interface JobSwipeCardProps {
  job: {
    title: string;
    company: string;
    description: string;
    logoUrl?: string;
  };
}

export function JobSwipeCard({ job }: JobSwipeCardProps) {
  return (
    <View className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-4 m-2">
      {job.logoUrl && <Image source={{ uri: job.logoUrl }} className="w-12 h-12 mb-2" />}
      <Text className="text-lg font-bold">{job.title}</Text>
      <Text className="text-sm text-gray-500">{job.company}</Text>
      <Text className="mt-2">{job.description}</Text>
    </View>
  );
}
