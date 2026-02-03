import { View, Text, Switch, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';
import { Screen } from '../components/Screen';

export default function SettingsScreen() {
  const [darkMode, setDarkMode] = useState(false);
  // TODO: Integrate account management and theme switching
  return (
    <Screen>
      <Text style={styles.heading}>Settings</Text>
      <View style={styles.row}>
        <View>
          <Text style={styles.label}>Dark mode</Text>
          <Text style={styles.helper}>Sync with your system appearance.</Text>
        </View>
        <Switch value={darkMode} onValueChange={setDarkMode} />
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutLabel}>Logout</Text>
      </TouchableOpacity>
    </Screen>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 22,
    fontWeight: '700',
    color: '#e5e7eb',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    color: '#e5e7eb',
    marginBottom: 4,
  },
  helper: {
    fontSize: 13,
    color: '#9ca3af',
  },
  logoutButton: {
    marginTop: 32,
    borderRadius: 999,
    backgroundColor: '#b91c1c',
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignSelf: 'flex-start',
  },
  logoutLabel: {
    color: '#f9fafb',
    fontWeight: '600',
    fontSize: 16,
  },
});
