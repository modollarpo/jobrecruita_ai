import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { apiFetch } from '../../../shared/utils/api';
import { Screen } from '../../components/Screen';

// Register page with modern design and micro-interactions
export default function RegisterScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState('');
  const handleRegister = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await apiFetch<{ token: string; user: any }>('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      if (typeof localStorage !== 'undefined') localStorage.setItem('token', res.token);
      router.replace('/dashboard');
    } catch (err) {
      setError('Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Screen>
      <Text style={styles.heading}>Create your account</Text>
      <TextInput
        style={styles.input}
        placeholder="Work email"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="#6b7280"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        placeholderTextColor="#6b7280"
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TouchableOpacity
        style={styles.primaryCta}
        onPress={handleRegister}
        activeOpacity={0.85}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#f9fafb" />
        ) : (
          <Text style={styles.primaryCtaLabel}>Register</Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity style={{ marginTop: 24 }} onPress={() => router.push('/auth/login')}>
        <Text style={styles.switchAuth}>Already have an account? Login</Text>
      </TouchableOpacity>
    </Screen>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: '700',
    color: '#e5e7eb',
    marginBottom: 24,
  },
  input: {
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#1f2937',
    paddingHorizontal: 16,
    paddingVertical: 10,
    color: '#e5e7eb',
    marginBottom: 12,
  },
  error: {
    color: '#f97373',
    textAlign: 'center',
    marginBottom: 12,
  },
  primaryCta: {
    borderRadius: 999,
    backgroundColor: '#0ea5e9',
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 4,
  },
  primaryCtaLabel: {
    color: '#f9fafb',
    fontWeight: '700',
    fontSize: 16,
  },
  switchAuth: {
    textAlign: 'center',
    color: '#9ca3af',
  },
});
