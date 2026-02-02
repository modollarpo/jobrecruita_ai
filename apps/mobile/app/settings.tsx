import { View, Text, Switch, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function SettingsScreen() {
  const [darkMode, setDarkMode] = useState(false);
  // TODO: Integrate account management and theme switching
  return (
    <View className="flex-1 bg-white dark:bg-black px-6 pt-8">
      <Text className="text-2xl font-bold mb-6">Settings</Text>
      <View className="flex-row justify-between items-center mb-6">
        <Text className="text-lg">Dark Mode</Text>
        <Switch value={darkMode} onValueChange={setDarkMode} />
      </View>
      <TouchableOpacity className="bg-red-600 rounded-full px-8 py-3 mt-8">
        <Text className="text-white text-lg font-semibold text-center">Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
