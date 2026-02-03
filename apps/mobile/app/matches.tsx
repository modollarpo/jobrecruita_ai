import { View, Text, ScrollView, ActivityIndicator, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import { Screen } from '../components/Screen';

// Placeholder matches data
const matches = [
  { job: 'Frontend Developer', company: 'TechCorp', score: 92 },
  { job: 'AI Engineer', company: 'AI Labs', score: 88 },
];

export default function MatchesScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) {
    return (
      <Screen>
        <View style={styles.center}>
          <ActivityIndicator size="large" color="#0ea5e9" />
          <Text style={styles.loadingText}>Loading your AI matches...</Text>
        </View>
      </Screen>
    );
  }

  return (
    <Screen>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.heading}>Your AI matches</Text>
        {matches.map((m, idx) => (
          <View key={idx} style={styles.card}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 }}>
              <Text style={styles.job}>{m.job}</Text>
              <Text style={styles.score}>{m.score}%</Text>
            </View>
            <Text style={styles.company}>{m.company}</Text>
            <Text style={styles.hint}>Tap a role in the web app for full radar analysis.</Text>
          </View>
        ))}
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
  heading: {
    fontSize: 22,
    fontWeight: '700',
    color: '#e5e7eb',
    marginBottom: 16,
  },
  card: {
    borderRadius: 16,
    padding: 16,
    backgroundColor: '#020617',
    borderWidth: 1,
    borderColor: '#1e293b',
    marginBottom: 12,
  },
  job: {
    fontSize: 16,
    fontWeight: '600',
    color: '#e5e7eb',
  },
  score: {
    fontSize: 16,
    fontWeight: '700',
    color: '#22c55e',
  },
  company: {
    fontSize: 14,
    color: '#9ca3af',
    marginBottom: 4,
  },
  hint: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 4,
  },
});
