import { Stack } from 'expo-router'; // expo-router에서 Stack을 임포트

export default function RootLayout() {
  return (
    // Expo Router의 Stack을 사용하고 NavigationContainer는 사용하지 않습니다.
    <Stack>
      <Stack.Screen name="HomeScreen" options={{ title: 'Home' }} />
      <Stack.Screen name="DetailScreen" options={{ title: 'Detail' }} />

      {/* 다른 화면들 추가 */}
    </Stack>
  );
}
