import React, { useRef, useState, useEffect } from 'react';
import { View, Text, Animated, PanResponder, Dimensions, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import { JobSwipeCard } from '../components/JobSwipeCard';
import { apiFetch } from '../../shared/utils/api';
import { Job } from '../../shared/types/job';
import { Screen } from '../components/Screen';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function SwipeScreen() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [applying, setApplying] = useState(false);
  const [applyMsg, setApplyMsg] = useState<string | null>(null);
  const [matchScore, setMatchScore] = useState<number | null | undefined>(undefined);
  const [scoreLoading, setScoreLoading] = useState(false);
  const position = useRef(new Animated.ValueXY()).current;

  useEffect(() => {
    apiFetch<Job[]>('http://localhost:3000/api/jobs')
      .then(setJobs)
      .catch(() => setError('Failed to load jobs'))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (!jobs[index]) {
      setMatchScore(undefined);
      return;
    }
    setScoreLoading(true);
    const candidateId = 'demo-candidate-id';
    apiFetch<{ score: number }>('http://localhost:3000/api/ai-match', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ jobId: jobs[index].id, candidateId }),
    })
      .then(res => setMatchScore(res.score))
      .catch(() => setMatchScore(null))
      .finally(() => setScoreLoading(false));
  }, [index, jobs]);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        { dx: position.x, dy: position.y },
      ], { useNativeDriver: false }),
      onPanResponderRelease: (_, gesture) => {
        if (gesture.dx > 120) {
          Animated.timing(position, {
            toValue: { x: SCREEN_WIDTH + 100, y: gesture.dy },
            duration: 200,
            useNativeDriver: false,
          }).start(() => {
            position.setValue({ x: 0, y: 0 });
            setIndex(prev => prev + 1);
          });
        } else if (gesture.dx < -120) {
          Animated.timing(position, {
            toValue: { x: -SCREEN_WIDTH - 100, y: gesture.dy },
            duration: 200,
            useNativeDriver: false,
          }).start(() => {
            position.setValue({ x: 0, y: 0 });
            setIndex(prev => prev + 1);
          });
        } else {
          Animated.spring(position, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;

  async function handleApply() {
    if (!jobs[index]) return;
    setApplying(true);
    setApplyMsg(null);
    try {
      const candidateId = 'demo-candidate-id';
      await apiFetch('http://localhost:3000/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ jobId: jobs[index].id, candidateId }),
      });
      setApplyMsg('Application submitted!');
    } catch {
      setApplyMsg('Failed to apply.');
    } finally {
      setApplying(false);
    }
  }

  if (loading) {
    return (
      <Screen>
        <View style={styles.center}>
          <ActivityIndicator size="large" color="#0ea5e9" />
          <Text style={styles.loadingText}>Loading roles...</Text>
        </View>
      </Screen>
    );
  }

  if (error) {
    return (
      <Screen>
        <View style={styles.center}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      </Screen>
    );
  }

  if (index >= jobs.length) {
    return (
      <Screen>
        <View style={styles.center}>
          <Text style={styles.emptyText}>No more jobs. Check back later.</Text>
        </View>
      </Screen>
    );
  }

  return (
    <Screen>
      <View style={styles.cardContainer}>
        <Animated.View
          style={[styles.animatedCard, { transform: [{ translateX: position.x }, { translateY: position.y }] }]}
          {...panResponder.panHandlers}
        >
          <JobSwipeCard job={jobs[index]} />
        </Animated.View>
      </View>

      <View style={styles.scoreContainer}>
        {scoreLoading ? (
          <ActivityIndicator size="small" color="#0ea5e9" />
        ) : matchScore === null ? (
          <Text style={styles.scoreError}>AI match: N/A</Text>
        ) : matchScore === undefined ? null : (
          <Text style={styles.scoreLabel}>AI match: {matchScore}</Text>
        )}
      </View>

      {applyMsg ? <Text style={styles.applyMsg}>{applyMsg}</Text> : null}

      <TouchableOpacity
        style={styles.applyButton}
        onPress={handleApply}
        disabled={applying}
        activeOpacity={0.85}
      >
        {applying ? <ActivityIndicator color="#f9fafb" /> : <Text style={styles.applyLabel}>Apply</Text>}
      </TouchableOpacity>

      <Text style={styles.hint}>Swipe right to save, left to skip.</Text>
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
  errorText: {
    color: '#f97373',
    fontSize: 16,
  },
  emptyText: {
    color: '#9ca3af',
    fontSize: 16,
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  animatedCard: {
    width: '100%',
  },
  scoreContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
  scoreLabel: {
    color: '#0ea5e9',
    fontWeight: '700',
    fontSize: 18,
  },
  scoreError: {
    color: '#f97373',
    fontWeight: '600',
  },
  applyMsg: {
    color: '#22c55e',
    marginTop: 12,
  },
  applyButton: {
    marginTop: 16,
    borderRadius: 999,
    backgroundColor: '#0ea5e9',
    paddingVertical: 12,
    paddingHorizontal: 32,
    alignSelf: 'center',
  },
  applyLabel: {
    color: '#f9fafb',
    fontWeight: '700',
    fontSize: 16,
  },
  hint: {
    marginTop: 24,
    color: '#6b7280',
    textAlign: 'center',
  },
});
