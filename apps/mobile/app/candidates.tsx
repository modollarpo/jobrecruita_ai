import { View, Text, ScrollView, ActivityIndicator, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import { Screen } from '../components/Screen';

// Example candidate data
const candidates = [
  { name: 'Alice Johnson', skills: ['React', 'TypeScript', 'UI/UX'], heatmap: [80, 90, 70], aiScore: 92 },
  { name: 'Bob Smith', skills: ['Python', 'ML', 'Data Science'], heatmap: [95, 85, 88], aiScore: 88 },
  { name: 'Carol Lee', skills: ['Figma', 'Design', 'Branding'], heatmap: [75, 80, 92], aiScore: 85 },
];

// Skill heatmap component
function SkillHeatmap({ heatmap }: { heatmap: number[] }) {
  return (
    <View style={styles.heatmapRow}>
      {heatmap.map((score, idx) => (
        <View
          key={idx}
          style={[styles.heatCell, { backgroundColor: `rgba(37,99,235,${score / 100})` }]}
        />
      ))}
    </View>
  );
}

// Candidate list page with filters, search, and skeleton loaders
export default function CandidatesScreen() {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const filtered = candidates.filter(
    (c) =>
      (!search || c.name.toLowerCase().includes(search.toLowerCase())) &&
      (!filter || c.skills.includes(filter))
  );

  if (loading) {
    return (
      <Screen>
        <View style={styles.center}>
          <ActivityIndicator size="large" color="#0ea5e9" />
          <Text style={styles.loadingText}>Loading candidates...</Text>
        </View>
      </Screen>
    );
  }

  return (
    <Screen>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.heading}>Candidates</Text>
        {/* Search and filter bar */}
        <View style={styles.searchRow}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search by name"
            value={search}
            onChangeText={setSearch}
            placeholderTextColor="#6b7280"
          />
          <TouchableOpacity
            style={styles.filterButton}
            onPress={() => setFilter(filter ? '' : 'React')}
          >
            <Text style={styles.filterLabel}>{filter ? 'Clear' : 'React'}</Text>
          </TouchableOpacity>
        </View>
        {/* Candidate cards */}
        {filtered.length === 0 ? (
          <Text style={styles.emptyText}>No candidates found.</Text>
        ) : (
          filtered.map((c, idx) => (
            <View key={idx} style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={styles.name}>{c.name}</Text>
                <Text style={styles.score}>AI score: {c.aiScore}</Text>
              </View>
              <Text style={styles.skills}>Skills: {c.skills.join(', ')}</Text>
              <SkillHeatmap heatmap={c.heatmap} />
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
  heading: {
    fontSize: 22,
    fontWeight: '700',
    color: '#e5e7eb',
    marginBottom: 16,
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#1e293b',
    paddingHorizontal: 14,
    paddingVertical: 8,
    color: '#e5e7eb',
    marginRight: 8,
  },
  filterButton: {
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: '#0ea5e9',
  },
  filterLabel: {
    color: '#f9fafb',
    fontWeight: '600',
  },
  emptyText: {
    color: '#6b7280',
  },
  card: {
    borderRadius: 16,
    padding: 16,
    backgroundColor: '#020617',
    borderWidth: 1,
    borderColor: '#1e293b',
    marginBottom: 12,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#e5e7eb',
  },
  score: {
    fontSize: 14,
    fontWeight: '600',
    color: '#22c55e',
  },
  skills: {
    fontSize: 13,
    color: '#9ca3af',
    marginBottom: 6,
  },
  heatmapRow: {
    flexDirection: 'row',
    marginTop: 6,
  },
  heatCell: {
    height: 6,
    borderRadius: 999,
    marginRight: 4,
    width: 40,
  },
});
