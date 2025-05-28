import { Stack } from 'expo-router'; // expo-router���� Stack�� ����Ʈ

export default function RootLayout() {
  return (
    // Expo Router�� Stack�� ����ϰ� NavigationContainer�� ������� �ʽ��ϴ�.
    <Stack>
      <Stack.Screen name="HomeScreen" options={{ title: 'Home' }} />
      <Stack.Screen name="DetailScreen" options={{ title: 'Detail' }} />

      {/* �ٸ� ȭ��� �߰� */}
    </Stack>
  );
}
