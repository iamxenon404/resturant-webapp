const API_URL = 'http://localhost:1111/api'; // Pointing directly to your NestJS port & prefix

export async function registerUser(payload: any) {
  try {
    const response = await fetch(`${API_URL}/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong');
    }

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
}