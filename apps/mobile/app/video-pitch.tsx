import { View, Text, TouchableOpacity } from 'react-native';

export default function VideoPitchScreen() {
  // TODO: Integrate AI video pitch generation and upload
  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-black px-6">
      <Text className="text-2xl font-bold mb-4">AI Video Pitch</Text>
      <Text className="text-gray-500 mb-8 text-center">Generate a 15–30 second AI-powered video pitch to stand out to recruiters.</Text>
      <TouchableOpacity className="bg-purple-700 rounded-full px-8 py-3 mb-4">
        <Text className="text-white text-lg font-semibold">Generate Video Pitch</Text>
      </TouchableOpacity>
      <TouchableOpacity className="bg-green-600 rounded-full px-8 py-3">
        <Text className="text-white text-lg font-semibold">Upload Video</Text>
      </TouchableOpacity>
    </View>
  );
}
