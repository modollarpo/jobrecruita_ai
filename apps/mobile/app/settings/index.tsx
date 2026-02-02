// Settings and account management
import { View, Text, Switch } from 'react-native';
import { useState } from 'react';

export default function SettingsScreen() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <View className="flex-1 bg-white dark:bg-black p-4">
      <Text className="text-2xl font-bold mb-4">Settings</Text>
      <View className="flex-row items-center justify-between mb-4">
        <Text className="text-lg">Dark Mode</Text>
        <Switch value={darkMode} onValueChange={setDarkMode} />
      </View>
      {/* ...other settings... */}
    </View>
  );
}
