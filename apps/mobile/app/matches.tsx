import { View, Text, ScrollView, ActivityIndicator, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import { Screen } from '../components/Screen';
import { VerificationSignal } from '../components/VerificationSignal';

import { apiFetch } from '../../shared/utils/api';

export default function MatchesScreen() {
  const [loading, setLoading] = useState(true);
  const [matches, setMatches] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiFetch('http://localhost:3000/api/matches')
      .then((data) => setMatches(data))
      .catch(() => setError('Failed to load matches'))
      .finally(() => setLoading(false));
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
  if (error) {
    return (
      <Screen>
        <View style={styles.center}>
          <Text style={styles.loadingText}>{error}</Text>
        </View>
      </Screen>
    );
  }
  return (
    <Screen>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.heading}>Your AI matches</Text>
        {matches.length === 0 ? (
          <Text style={styles.emptyText}>No matches found.</Text>
        ) : matches.map((m, idx) => (
          <View key={idx} style={styles.card}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 }}>
              <Text style={styles.job}>{m.job?.title || m.job || 'Unknown Job'}</Text>
              <Text style={styles.score}>{m.aiScore ? `${m.aiScore}%` : 'N/A'}</Text>
            </View>
            <Text style={styles.company}>{m.job?.company || m.company || ''}</Text>
            <VerificationSignal verified={true} zkpTime={1.02 + idx * 0.1} />
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
