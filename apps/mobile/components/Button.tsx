// Reusable button component
import { TouchableOpacity, Text } from 'react-native';

export function Button({ title, onPress }: { title: string; onPress: () => void }) {
  return (
    <TouchableOpacity className="bg-blue-600 rounded p-3 items-center" onPress={onPress}>
      <Text className="text-white font-semibold">{title}</Text>
    </TouchableOpacity>
  );
}
