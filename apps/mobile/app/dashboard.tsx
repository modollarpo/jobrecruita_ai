import { View, Text, ScrollView, ActivityIndicator, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import { JobSwipeCard } from '../components/JobSwipeCard';
import { Screen } from '../components/Screen';
import { apiFetch } from '../../shared/utils/api';

// Real data state
const initialInsights = { matches: 0, autoApplied: 0, interviews: 0 };

// Dashboard page with AI insights, activity feed, jobs/candidates overview
export default function DashboardScreen() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [activity, setActivity] = useState([]);
  const [aiInsights, setAiInsights] = useState(initialInsights);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const [jobsData, activityData, insightsData] = await Promise.all([
          apiFetch('http://localhost:3000/api/jobs'),
          apiFetch('http://localhost:3000/api/activity'),
          apiFetch('http://localhost:3000/api/analytics'),
        ]);
        setJobs(jobsData);
        setActivity(activityData);
        setAiInsights(insightsData);
      } catch (err) {
        setError('Failed to load dashboard data');
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <Screen>
        <View style={styles.loadingCenter}>
          <ActivityIndicator size="large" color="#0ea5e9" />
          <Text style={styles.loadingText}>Loading your JobRecruita dashboard...</Text>
        </View>
      </Screen>
    );
  }
  if (error) {
    return (
      <Screen>
        <View style={styles.loadingCenter}>
          <Text style={styles.loadingText}>{error}</Text>
        </View>
      </Screen>
    );
  }
  return (
    <Screen>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.heading}>Today at a glance</Text>
        <View style={styles.kpiRow}>
          <View style={[styles.kpiCard, { backgroundColor: '#0f172a' }]}>
            <Text style={styles.kpiLabel}>AI matches</Text>
            <Text style={styles.kpiValue}>{aiInsights.matches}</Text>
          </View>
          <View style={[styles.kpiCard, { backgroundColor: '#022c22' }]}>
            <Text style={styles.kpiLabel}>Auto-applied</Text>
            <Text style={styles.kpiValue}>{aiInsights.autoApplied}</Text>
          </View>
          <View style={[styles.kpiCard, { backgroundColor: '#1f2937' }]}>
            <Text style={styles.kpiLabel}>Interviews</Text>
            <Text style={styles.kpiValue}>{aiInsights.interviews}</Text>
          </View>
        </View>
        <Text style={styles.sectionTitle}>Recommended roles</Text>
        {jobs.length === 0 ? (
          <Text style={styles.emptyText}>No jobs found.</Text>
        ) : jobs.map((job, idx) => (
          <JobSwipeCard key={idx} job={job} />
        ))}
        <Text style={styles.sectionTitle}>Recent activity</Text>
        {activity.length === 0 ? (
          <Text style={styles.emptyText}>No activity yet.</Text>
        ) : activity.map((a, idx) => (
          <View key={idx} style={styles.activityCard}>
            <Text style={styles.activityText}>{a.message}</Text>
            <Text style={styles.activityMeta}>{a.time}</Text>
          </View>
        ))}
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  loadingCenter: {
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
  kpiRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  kpiCard: {
    flex: 1,
    borderRadius: 16,
    padding: 12,
    marginHorizontal: 4,
  },
  kpiLabel: {
    fontSize: 11,
    color: '#9ca3af',
    marginBottom: 4,
  },
  kpiValue: {
    fontSize: 22,
    fontWeight: '800',
    color: '#e5e7eb',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#e5e7eb',
    marginTop: 8,
    marginBottom: 12,
  },
  activityCard: {
    borderRadius: 16,
    padding: 12,
    backgroundColor: '#020617',
    borderWidth: 1,
    borderColor: '#111827',
    marginBottom: 8,
  },
  activityText: {
    color: '#d1d5db',
  },
  activityMeta: {
    color: '#6b7280',
    fontSize: 12,
    marginTop: 4,
  },
});
