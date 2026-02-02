import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { apiFetch } from '../../../shared/utils/api';

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
    <View className="flex-1 justify-center px-6 bg-white dark:bg-black">
      <Text className="text-2xl font-bold mb-6 text-center text-blue-700 dark:text-blue-300">Register for JobRecruita</Text>
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
        onPress={handleRegister}
        activeOpacity={0.8}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text className="text-white text-lg font-semibold text-center">Register</Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity className="mt-8" onPress={() => router.push('/auth/login')}>
        <Text className="text-center text-gray-500">Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
}
