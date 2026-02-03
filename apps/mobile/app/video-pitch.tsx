import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Screen } from '../components/Screen';

export default function VideoPitchScreen() {
  // TODO: Integrate AI video pitch generation and upload
  return (
    <Screen>
      <Text style={styles.heading}>AI video pitch</Text>
      <Text style={styles.body}>
        Generate a 15–30 second, on-brand video pitch to introduce yourself to hiring teams before the first call.
      </Text>
      <View style={styles.actions}>
        <TouchableOpacity style={[styles.chip, styles.primaryChip]}>
          <Text style={styles.chipLabel}>Generate with JobRecruita AI</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.chip, styles.secondaryChip]}>
          <Text style={styles.chipLabel}>Upload existing video</Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 22,
    fontWeight: '700',
    color: '#e5e7eb',
    marginBottom: 12,
  },
  body: {
    fontSize: 16,
    color: '#9ca3af',
    marginBottom: 32,
  },
  actions: {
    gap: 12,
  },
  chip: {
    borderRadius: 999,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  primaryChip: {
    backgroundColor: '#7c3aed',
  },
  secondaryChip: {
    backgroundColor: '#16a34a',
  },
  chipLabel: {
    color: '#f9fafb',
    fontWeight: '600',
  },
});
