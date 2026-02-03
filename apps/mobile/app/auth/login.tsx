import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { apiFetch } from '../../../shared/utils/api';
import { Screen } from '../../components/Screen';

// Login page with modern design, OAuth stubs, and micro-interactions
export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // Placeholder for OAuth logic
  const handleOAuth = (provider: string) => {
    // TODO: Integrate LinkedIn/Google OAuth
    alert(`OAuth with ${provider} coming soon!`);
  };

  const [error, setError] = useState('');
  const handleLogin = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await apiFetch<{ token: string; user: any }>('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      // Store token (for demo, use localStorage if available, or SecureStore in production)
      if (typeof localStorage !== 'undefined') localStorage.setItem('token', res.token);
      router.replace('/dashboard');
    } catch (err) {
      setError('Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Screen>
      <Text style={styles.heading}>Login to JobRecruita</Text>
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
        onPress={handleLogin}
        activeOpacity={0.85}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#f9fafb" />
        ) : (
          <Text style={styles.primaryCtaLabel}>Login</Text>
        )}
      </TouchableOpacity>
      <View style={styles.oauthRow}>
        <TouchableOpacity onPress={() => handleOAuth('LinkedIn')}>
          <Text style={styles.linkedIn}>LinkedIn</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOAuth('Google')}>
          <Text style={styles.google}>Google</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={{ marginTop: 24 }} onPress={() => router.push('/auth/register')}>
        <Text style={styles.switchAuth}>Don't have an account? Register</Text>
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
  oauthRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 24,
  },
  linkedIn: {
    color: '#60a5fa',
    fontWeight: '600',
  },
  google: {
    color: '#f97373',
    fontWeight: '600',
  },
  switchAuth: {
    textAlign: 'center',
    color: '#9ca3af',
  },
});
