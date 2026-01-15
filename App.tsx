import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';
import { useFonts } from 'expo-font';
import {
  TamaguiProvider,
  View,
  Text,
  Button,
  YStack,
  XStack,
  Theme,
  H1,
  Paragraph,
} from 'tamagui';
import {
  Target,
  Play,
  Users,
  Zap,
  Trophy,
  Clock,
  Globe,
} from '@tamagui/lucide-icons';
import config from './tamagui.config';

export default function App() {
  const [loaded] = useFonts({
    GoogleSans: require('./assets/fonts/GoogleSans-Regular.ttf'),
    GoogleSansItalic: require('./assets/fonts/GoogleSans-Italic.ttf'),
    GoogleSansMedium: require('./assets/fonts/GoogleSans-Medium.ttf'),
    GoogleSansMediumItalic: require('./assets/fonts/GoogleSans-MediumItalic.ttf'),
    GoogleSansSemiBold: require('./assets/fonts/GoogleSans-SemiBold.ttf'),
    GoogleSansSemiBoldItalic: require('./assets/fonts/GoogleSans-SemiBoldItalic.ttf'),
    GoogleSansBold: require('./assets/fonts/GoogleSans-Bold.ttf'),
    GoogleSansBoldItalic: require('./assets/fonts/GoogleSans-BoldItalic.ttf'),
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!loaded || !mounted) {
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
    <View flex={1} backgroundColor="$background">
      <LinearGradient
        colors={['$background', '$backgroundStrong']}
        style={{
          flex: 1,
          paddingTop: 80,
          paddingHorizontal: 24,
          alignItems: 'center',
        }}
      >
        <StatusBar style="light" />

        {/* Hero Section */}
        <YStack
          alignItems="center"
          marginBottom="$8"
          animation="medium"
          enterStyle={{ opacity: 0, scale: 0.9 }}
          opacity={1}
          scale={1}
        >
          <View
            width="$12"
            height="$12"
            borderRadius="$10"
            backgroundColor="$white1"
            opacity={0.1}
            justifyContent="center"
            alignItems="center"
            marginBottom="$4"
          >
            <Target size="$8" color="$primary" />
          </View>
          <H1
            size="$10"
            fontWeight="800"
            color="$text"
            textShadowColor="$primary"
            textShadowOffset={{ width: 0, height: 2 }}
            textShadowRadius={10}
            textAlign="center"
          >
            Quiz Arena
          </H1>
          <Paragraph
            size="$5"
            color="$textMuted"
            textAlign="center"
            maxWidth={280}
            marginTop="$3"
          >
            Challenge friends in real-time trivia battles
          </Paragraph>
        </YStack>

        {/* Action Buttons */}
        <YStack
          width="100%"
          maxWidth={320}
          gap="$4"
          animation="medium"
          enterStyle={{ opacity: 0, y: 30 }}
          opacity={1}
          y={0}
        >
          <Button
            size="$6"
            backgroundColor="$primary"
            pressStyle={{ scale: 0.97, opacity: 0.9 }}
            borderRadius="$4"
            animation="quick"
            icon={<Play size="$2" color="white" />}
          >
            <Text color="white" fontWeight="700">
              Create Room
            </Text>
          </Button>

          <Button
            size="$6"
            backgroundColor="transparent"
            borderColor="$borderColor"
            borderWidth={2}
            pressStyle={{
              scale: 0.97,
              backgroundColor: '$backgroundStrong',
            }}
            borderRadius="$4"
            animation="quick"
            icon={<Users size="$2" color="$text" />}
          >
            <Text color="$text" fontWeight="600">
              Join Room
            </Text>
          </Button>

          <Button
            size="$6"
            backgroundColor="$secondary"
            pressStyle={{ scale: 0.97, opacity: 0.9 }}
            borderRadius="$4"
            animation="quick"
            icon={<Zap size="$2" color="white" />}
          >
            <Text color="white" fontWeight="700">
              Quick Play
            </Text>
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
          {[
            { Icon: Trophy, text: 'Compete for glory' },
            { Icon: Clock, text: 'Real-time battles' },
            { Icon: Globe, text: 'Play anywhere' },
          ].map(({ Icon, text }) => (
            <View
              key={text}
              flex={1}
              alignItems="center"
              padding="$4"
              borderRadius="$4"
              backgroundColor="$backgroundStrong"
              borderWidth={1}
              borderColor="$borderColor"
            >
              <Icon size="$6" color="$primary" marginBottom="$2" />
              <Paragraph size="$2" color="$textMuted" textAlign="center">
                {text}
              </Paragraph>
            </View>
          ))}
        </XStack>

        {/* Version */}
        <Paragraph
          position="absolute"
          bottom={40}
          size="$2"
          color="$textMuted"
          opacity={0.5}
        >
          v1.0.0
        </Paragraph>
      </LinearGradient>
    </View>
  );
}
