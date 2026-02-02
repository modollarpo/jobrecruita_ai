// OAuth button group for LinkedIn and Google
import { View, TouchableOpacity, Text } from 'react-native';

export function OAuthButtons() {
  return (
    <View style={{ width: '100%', gap: 16 }}>
      <TouchableOpacity style={{ backgroundColor: '#2563eb', borderRadius: 8, padding: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>
        <Text style={{ color: '#fff', fontWeight: '600' }}>Continue with LinkedIn</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ backgroundColor: '#dc2626', borderRadius: 8, padding: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: '#fff', fontWeight: '600' }}>Continue with Google</Text>
      </TouchableOpacity>
    </View>
  );
}
