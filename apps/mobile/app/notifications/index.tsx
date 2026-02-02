// Notifications with push support
import { View, Text, ScrollView } from 'react-native';

export default function NotificationsScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff', padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Notifications</Text>
      <ScrollView>
        {/* Notification items go here */}
        <View style={{ marginBottom: 8, padding: 16, backgroundColor: '#f3f4f6', borderRadius: 16, elevation: 2 }}>
          <Text style={{ fontWeight: '600' }}>Interview scheduled with TechCorp</Text>
          <Text style={{ color: '#6b7280' }}>2 hours ago</Text>
        </View>
      </ScrollView>
    </View>
  );
}
