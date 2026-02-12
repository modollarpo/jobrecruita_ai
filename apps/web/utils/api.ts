export async function apiFetch<T>(url: string, options?: RequestInit): Promise<T> {
  const res = await fetch(url, {
    ...options,
    credentials: 'include', // Send cookies with requests
  });
  if (!res.ok) throw new Error('API error');
  return res.json();
}
