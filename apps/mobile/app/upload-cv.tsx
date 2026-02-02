import { View, Text, TouchableOpacity } from 'react-native';

export default function UploadCVScreen() {
  // TODO: Integrate file picker and upload logic
  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-black px-6">
      <Text className="text-2xl font-bold mb-4">Upload CV</Text>
      <Text className="text-gray-500 mb-8 text-center">Upload your CV to improve your AI match and auto-apply experience.</Text>
      <TouchableOpacity className="bg-blue-600 rounded-full px-8 py-3 mb-4">
        <Text className="text-white text-lg font-semibold">Choose File</Text>
      </TouchableOpacity>
      <TouchableOpacity className="bg-green-600 rounded-full px-8 py-3">
        <Text className="text-white text-lg font-semibold">Upload</Text>
      </TouchableOpacity>
    </View>
  );
}
