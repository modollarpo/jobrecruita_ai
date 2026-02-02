import { View, Text, TouchableOpacity } from 'react-native';

export default function LinkedInImportScreen() {
  // TODO: Integrate LinkedIn API for profile import
  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-black px-6">
      <Text className="text-2xl font-bold mb-4">Import from LinkedIn</Text>
      <Text className="text-gray-500 mb-8 text-center">Import your LinkedIn profile to auto-fill your candidate profile and boost your AI match.</Text>
      <TouchableOpacity className="bg-blue-700 rounded-full px-8 py-3 mb-4">
        <Text className="text-white text-lg font-semibold">Connect LinkedIn</Text>
      </TouchableOpacity>
    </View>
  );
}
