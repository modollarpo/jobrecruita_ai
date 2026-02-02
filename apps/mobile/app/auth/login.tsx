import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { apiFetch } from '../../../shared/utils/api';

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
    <View className="flex-1 justify-center px-6 bg-white dark:bg-black">
      <Text className="text-2xl font-bold mb-6 text-center text-blue-700 dark:text-blue-300">Login to JobRecruita</Text>
      <TextInput
        className="border rounded px-3 py-2 mb-4 dark:bg-gray-800 dark:text-white"
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="#888"
      />
      <TextInput
        className="border rounded px-3 py-2 mb-6 dark:bg-gray-800 dark:text-white"
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        placeholderTextColor="#888"
      />
      {error ? <Text className="text-red-500 mb-2 text-center">{error}</Text> : null}
      <TouchableOpacity
        className="bg-blue-600 rounded-full py-3 mb-4"
        onPress={handleLogin}
        activeOpacity={0.8}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text className="text-white text-lg font-semibold text-center">Login</Text>
        )}
      </TouchableOpacity>
      <View className="flex-row justify-center mt-6 space-x-6">
        <TouchableOpacity onPress={() => handleOAuth('LinkedIn')}>
          <Text className="text-blue-700 font-semibold">LinkedIn</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOAuth('Google')}>
          <Text className="text-red-600 font-semibold">Google</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity className="mt-8" onPress={() => router.push('/auth/register')}>
        <Text className="text-center text-gray-500">Don't have an account? Register</Text>
      </TouchableOpacity>
    </View>
  );
}
