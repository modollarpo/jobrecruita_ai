import { View, Text, ScrollView, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import { Screen } from '../components/Screen';

// Example notifications data
const notifications = [
  { message: 'Your application for Frontend Developer was viewed.', time: '2h ago' },
  { message: 'New job match: AI Engineer at AI Labs.', time: '1d ago' },
];

// Notifications page with modern design and push notification placeholder
export default function NotificationsScreen() {
  const [loading, setLoading] = useState(true);
  const [notifs, setNotifs] = useState(notifications);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const clearNotifications = () => setNotifs([]);

  if (loading) {
    return (
      <Screen>
        <View style={styles.center}>
          <ActivityIndicator size="large" color="#0ea5e9" />
          <Text style={styles.loadingText}>Loading notifications...</Text>
        </View>
      </Screen>
    );
  }

  return (
    <Screen>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.headerRow}>
          <Text style={styles.heading}>Notifications</Text>
          <TouchableOpacity onPress={clearNotifications} style={styles.clearButton}>
            <Text style={styles.clearLabel}>Clear</Text>
          </TouchableOpacity>
        </View>
        {notifs.length === 0 ? (
          <Text style={styles.emptyText}>No notifications yet.</Text>
        ) : (
          notifs.map((n, idx) => (
            <View key={idx} style={styles.card}>
              <Text style={styles.message}>{n.message}</Text>
              <Text style={styles.time}>{n.time}</Text>
            </View>
          ))
        )}
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    marginTop: 12,
    color: '#9ca3af',
  },
  scrollContent: {
    paddingBottom: 24,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  heading: {
    fontSize: 22,
    fontWeight: '700',
    color: '#e5e7eb',
  },
  clearButton: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: '#111827',
  },
  clearLabel: {
    color: '#d1d5db',
    fontSize: 13,
  },
  emptyText: {
    color: '#6b7280',
  },
  card: {
    borderRadius: 16,
    padding: 14,
    backgroundColor: '#022c22',
    marginBottom: 10,
  },
  message: {
    color: '#e5e7eb',
  },
  time: {
    color: '#9ca3af',
    fontSize: 12,
    marginTop: 4,
  },
});
