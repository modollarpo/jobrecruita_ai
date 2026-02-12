import { Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { Screen } from '../components/Screen';
import { Button } from '../components/Button';

export default function HomeScreen() {
  return (
    <Screen>
      <Text style={styles.title}>Welcome to JobRecruita</Text>
      <Text style={styles.subtitle}>
        Your AI co-pilot for finding roles that truly fit your skills, goals, and vibe.
      </Text>
      <Link href="/onboarding" asChild>
        <Button title="Get Started" fullWidth />
      </Link>
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1e293b',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#475569',
    marginBottom: 32,
  },
});
