// Saved Candidates / Favorites
import { View, Text, ScrollView } from 'react-native';

export default function FavoritesScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff', padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Favorites</Text>
      <ScrollView>
        {/* Favorite candidate/job cards go here */}
        <View style={{ marginBottom: 8, padding: 16, backgroundColor: '#fef9c3', borderRadius: 16, elevation: 2 }}>
          <Text style={{ fontWeight: '600' }}>Jane Doe</Text>
          <Text style={{ color: '#6b7280' }}>AI Engineer</Text>
        </View>
      </ScrollView>
    </View>
  );
}
