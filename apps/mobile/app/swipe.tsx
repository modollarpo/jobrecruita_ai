import { View, Text, Animated, PanResponder, Dimensions, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useRef, useState, useEffect } from 'react';
import { JobSwipeCard } from '../components/JobSwipeCard';
import { apiFetch } from '../../shared/utils/api';
import { Job } from '../../shared/types/job';



const SCREEN_WIDTH = Dimensions.get('window').width;

// Job match overview with swipe actions and micro-interactions
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

  // Fetch AI match score for the current job
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
            setIndex((prev) => prev + 1);
          });
        } else if (gesture.dx < -120) {
          Animated.timing(position, {
            toValue: { x: -SCREEN_WIDTH - 100, y: gesture.dy },
            duration: 200,
            useNativeDriver: false,
          }).start(() => {
            position.setValue({ x: 0, y: 0 });
            setIndex((prev) => prev + 1);
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

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
        <Text style={{ fontSize: 20, color: '#6b7280' }}>Loading...</Text>
      </View>
    );
  }
  if (error) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
        <Text style={{ fontSize: 20, color: 'red' }}>{error}</Text>
      </View>
    );
  }
  if (index >= jobs.length) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
        <Text style={{ fontSize: 20, color: '#6b7280' }}>No more jobs. Check back later!</Text>
      </View>
    );
  }

  async function handleApply() {
    setApplying(true);
    setApplyMsg(null);
    try {
      // For demo, use a hardcoded candidateId or fetch from user context
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

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
      <Animated.View
        style={[{ width: '100%', transform: [{ translateX: position.x }, { translateY: position.y }] }]}
        {...panResponder.panHandlers}
      >
        <JobSwipeCard job={jobs[index]} />
      </Animated.View>
      {/* AI Match Score Display */}
      <View style={{ marginTop: 16, alignItems: 'center' }}>
        {scoreLoading ? (
          <ActivityIndicator size="small" color="#2563eb" />
        ) : matchScore === null ? (
          <Text style={{ color: '#ef4444', fontWeight: 'bold' }}>AI Match: N/A</Text>
        ) : matchScore === undefined ? null : (
          <Text style={{ color: '#2563eb', fontWeight: 'bold', fontSize: 18 }}>AI Match: {matchScore}</Text>
        )}
      </View>
      {applyMsg ? <Text style={{ color: 'green', marginTop: 12 }}>{applyMsg}</Text> : null}
      <TouchableOpacity
        style={{ backgroundColor: '#2563eb', borderRadius: 24, paddingVertical: 12, paddingHorizontal: 32, marginTop: 16 }}
        onPress={handleApply}
        disabled={applying}
        activeOpacity={0.8}
      >
        {applying ? <ActivityIndicator color="#fff" /> : <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>Apply</Text>}
      </TouchableOpacity>
      <Text style={{ marginTop: 32, color: '#9ca3af' }}>Swipe right to save, left to skip</Text>
    </View>
  );
}
