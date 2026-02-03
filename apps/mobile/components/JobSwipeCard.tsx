import { View, Text, Image, StyleSheet } from 'react-native';

interface JobSwipeCardProps {
  job: {
    title: string;
    company: string;
    description: string;
    logoUrl?: string;
  };
}

export function JobSwipeCard({ job }: JobSwipeCardProps) {
  return (
    <View style={styles.card}>
      {job.logoUrl ? <Image source={{ uri: job.logoUrl }} style={styles.logo} /> : null}
      <Text style={styles.title}>{job.title}</Text>
      <Text style={styles.company}>{job.company}</Text>
      <Text style={styles.description}>{job.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#020617',
    borderRadius: 20,
    padding: 20,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.18,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 10 },
    borderWidth: 1,
    borderColor: '#1e293b',
  },
  logo: {
    width: 40,
    height: 40,
    marginBottom: 12,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#e5e7eb',
  },
  company: {
    fontSize: 14,
    color: '#9ca3af',
    marginTop: 2,
  },
  description: {
    fontSize: 14,
    color: '#cbd5f5',
    marginTop: 12,
  },
});
