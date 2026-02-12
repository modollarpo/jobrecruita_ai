import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface Skill {
  name: string;
  level: number; // 0-100
}

interface DigitalTwinProps {
  candidate: {
    name: string;
    avatarUrl?: string;
    skills: Skill[];
    auditionAvailable: boolean;
  };
  onSimulate: () => void;
}

export function DigitalTwinCard({ candidate, onSimulate }: DigitalTwinProps) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <MaterialIcons name="person" size={32} color="#38bdf8" />
        <Text style={styles.name}>{candidate.name}</Text>
      </View>
      <View style={styles.skillGraph}>
        {candidate.skills.map((skill, idx) => (
          <View key={idx} style={styles.skillBarContainer}>
            <Text style={styles.skillName}>{skill.name}</Text>
            <View style={styles.skillBarBg}>
              <View style={[styles.skillBar, { width: `${skill.level}%` }]} />
            </View>
            <Text style={styles.skillLevel}>{skill.level}%</Text>
          </View>
        ))}
      </View>
      {candidate.auditionAvailable && (
        <TouchableOpacity style={styles.simulateBtn} onPress={onSimulate}>
          <MaterialIcons name="play-circle-outline" size={24} color="#14b8a6" />
          <Text style={styles.simulateText}>Simulate-Before-Ship</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(32, 40, 56, 0.7)',
    borderRadius: 20,
    padding: 20,
    marginVertical: 8,
    shadowColor: '#38bdf8',
    shadowOpacity: 0.18,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 10 },
    borderWidth: 1.5,
    borderColor: '#38bdf8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: '#e5e7eb',
    marginLeft: 10,
  },
  skillGraph: {
    marginVertical: 8,
  },
  skillBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  skillName: {
    fontSize: 14,
    color: '#cbd5f5',
    width: 80,
  },
  skillBarBg: {
    backgroundColor: '#1e293b',
    borderRadius: 8,
    height: 8,
    width: 100,
    marginHorizontal: 8,
  },
  skillBar: {
    backgroundColor: '#38bdf8',
    borderRadius: 8,
    height: 8,
  },
  skillLevel: {
    fontSize: 12,
    color: '#14b8a6',
    width: 40,
    textAlign: 'right',
  },
  simulateBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    backgroundColor: '#14b8a6',
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignSelf: 'flex-start',
  },
  simulateText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
    marginLeft: 8,
  },
});
