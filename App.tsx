import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';
import { TamaguiProvider, View, Text, Button, YStack, XStack, Theme } from 'tamagui';
import config from './tamagui.config';

export default function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <TamaguiProvider config={config}>
      <Theme name="dark">
        <MainScreen />
      </Theme>
    </TamaguiProvider>
  );
}

function MainScreen() {
  return (
    <View flex={1}>
      <LinearGradient
        colors={['#0f0c29', '#302b63', '#24243e']}
        style={{ flex: 1, paddingTop: 80, paddingHorizontal: 24, alignItems: 'center' }}
      >
        <StatusBar style="light" />

        {/* Hero Section */}
        <YStack alignItems="center" marginBottom="$8" animation="medium" enterStyle={{ opacity: 0, scale: 0.9 }} opacity={1} scale={1}>
          <View
            width={100}
            height={100}
            borderRadius={50}
            backgroundColor="rgba(255, 255, 255, 0.1)"
            justifyContent="center"
            alignItems="center"
            marginBottom="$4"
          >
            <Text fontSize={48}>🎯</Text>
          </View>
          <Text
            fontSize={42}
            fontWeight="800"
            color="$white1"
            textShadowColor="rgba(102, 126, 234, 0.5)"
            textShadowOffset={{ width: 0, height: 2 }}
            textShadowRadius={10}
          >
            Quiz Arena
          </Text>
          <Text
            fontSize={16}
            color="rgba(255, 255, 255, 0.7)"
            textAlign="center"
            maxWidth={280}
            marginTop="$3"
          >
            Challenge friends in real-time trivia battles
          </Text>
        </YStack>

        {/* Action Buttons */}
        <YStack width="100%" maxWidth={320} gap="$4" animation="medium" enterStyle={{ opacity: 0, y: 30 }} opacity={1} y={0}>
          <Button
            size="$5"
            backgroundColor="$purple9"
            pressStyle={{ scale: 0.97, backgroundColor: '$purple10' }}
            borderRadius="$4"
            animation="quick"
          >
            <XStack gap="$3" alignItems="center">
              <Text fontSize={20}>▶️</Text>
              <Text color="white" fontSize={18} fontWeight="700">Create Room</Text>
            </XStack>
          </Button>

          <Button
            size="$5"
            backgroundColor="rgba(255, 255, 255, 0.05)"
            borderColor="rgba(255, 255, 255, 0.2)"
            borderWidth={2}
            pressStyle={{ scale: 0.97, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
            borderRadius="$4"
            animation="quick"
          >
            <XStack gap="$3" alignItems="center">
              <Text fontSize={20}>👥</Text>
              <Text color="rgba(255, 255, 255, 0.9)" fontSize={18} fontWeight="600">Join Room</Text>
            </XStack>
          </Button>

          <Button
            size="$5"
            backgroundColor="$pink9"
            pressStyle={{ scale: 0.97, backgroundColor: '$pink10' }}
            borderRadius="$4"
            animation="quick"
          >
            <XStack gap="$3" alignItems="center">
              <Text fontSize={20}>⚡</Text>
              <Text color="white" fontSize={18} fontWeight="700">Quick Play</Text>
            </XStack>
          </Button>
        </YStack>

        {/* Features Section */}
        <XStack
          justifyContent="space-between"
          width="100%"
          maxWidth={360}
          marginTop="$8"
          gap="$3"
          animation="medium"
          enterStyle={{ opacity: 0, y: 20 }}
          opacity={1}
          y={0}
        >
          <View
            flex={1}
            alignItems="center"
            padding="$4"
            borderRadius="$4"
            backgroundColor="rgba(255, 255, 255, 0.08)"
            borderWidth={1}
            borderColor="rgba(255, 255, 255, 0.1)"
          >
            <Text fontSize={24} marginBottom="$2">🏆</Text>
            <Text fontSize={11} color="rgba(255, 255, 255, 0.7)" textAlign="center">
              Compete for glory
            </Text>
          </View>
          <View
            flex={1}
            alignItems="center"
            padding="$4"
            borderRadius="$4"
            backgroundColor="rgba(255, 255, 255, 0.08)"
            borderWidth={1}
            borderColor="rgba(255, 255, 255, 0.1)"
          >
            <Text fontSize={24} marginBottom="$2">⏱️</Text>
            <Text fontSize={11} color="rgba(255, 255, 255, 0.7)" textAlign="center">
              Real-time battles
            </Text>
          </View>
          <View
            flex={1}
            alignItems="center"
            padding="$4"
            borderRadius="$4"
            backgroundColor="rgba(255, 255, 255, 0.08)"
            borderWidth={1}
            borderColor="rgba(255, 255, 255, 0.1)"
          >
            <Text fontSize={24} marginBottom="$2">🌍</Text>
            <Text fontSize={11} color="rgba(255, 255, 255, 0.7)" textAlign="center">
              Play anywhere
            </Text>
          </View>
        </XStack>

        {/* Version */}
        <Text
          position="absolute"
          bottom={40}
          fontSize={12}
          color="rgba(255, 255, 255, 0.3)"
        >
          v1.0.0
        </Text>
      </LinearGradient>
    </View>
  );
}
