import { View, YStack, XStack, H1, Paragraph, Button, Text } from 'tamagui';
import {
  Clock,
  Globe,
  LogOut,
  Play,
  Settings,
  Target,
  Trophy,
  Users,
  Zap,
} from '@tamagui/lucide-icons';
import { Logo } from '../components/Logo';

interface DashboardScreenProps {
  userName: string;
}

export function DashboardScreen({ userName }: DashboardScreenProps) {
  return (
    <YStack
      flex={1}
      alignItems="center"
      animation="snappy"
      enterStyle={{ opacity: 0, y: 0, x: 0, scale: 1 }}
      exitStyle={{ opacity: 0, y: 0, x: 0, scale: 1 }}
      opacity={1}
      $gtMd={{
        flexDirection: 'row',
        alignItems: 'stretch',
        width: '100%',
        maxWidth: 900, // Tighter max width
        alignSelf: 'center',
        gap: '$5', // Reduced gap
        paddingHorizontal: '$4',
      }}
    >
      {/* Hero Section / Sidebar */}
      <YStack
        alignItems="center"
        marginBottom="$8"
        marginTop="$8"
        $gtMd={{
          width: 200, // Thinner sidebar
          marginBottom: 0,
          marginTop: 0,
          justifyContent: 'flex-start', // Align to top usually looks cleaner for dashboards
          paddingTop: '$6',
          borderRightWidth: 1,
          borderColor: '$borderColor',
          paddingRight: '$4',
        }}
      >
        <YStack marginBottom="$4">
          <Logo size={60} />
        </YStack>
        <H1
          size="$8" // Smaller, more elegant
          fontWeight="700"
          color="$text"
          textAlign="center"
          $gtMd={{
            size: '$6',
          }}
        >
          {userName}
        </H1>
        <Paragraph
          size="$3"
          color="$textMuted"
          textAlign="center"
          marginTop="$2"
        >
          Ready to dominate?
        </Paragraph>
      </YStack>

      {/* Main Content Area */}
      <YStack
        width="100%"
        maxWidth={320}
        gap="$4"
        $gtMd={{
          flex: 1,
          maxWidth: 'unset',
          justifyContent: 'center',
          gap: '$5',
        }}
      >
        <H1
          size="$6"
          color="$textMuted"
          fontWeight="600"
          marginBottom="$2"
          $gtMd={{ display: 'none' }} // Hide mobile header if sidebar is present
        >
          Menu
        </H1>

        <XStack
          flexDirection="column"
          gap="$3"
          $gtMd={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: '$4',
          }}
        >
          <Button
            size="$5"
            backgroundColor="$backgroundStrong"
            borderColor="$borderColor"
            borderWidth={1}
            pressStyle={{ scale: 0.98, opacity: 0.9 }}
            hoverStyle={{
              borderColor: '$primary',
              scale: 1.01,
              backgroundColor: '$background',
              shadowColor: '$primary',
              shadowOpacity: 0.1,
              shadowRadius: 10,
            }}
            borderRadius="$6"
            animation="quick"
            icon={<Play size="$2" color="$primary" />}
            $gtMd={{
              width: '48%',
              height: 120, // Reduced height
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '$1',
            }}
          >
            <Text color="$text" fontWeight="600" fontSize="$5">
              Create Room
            </Text>
            <Text color="$textMuted" fontSize="$2">
              Host a new game
            </Text>
          </Button>

          <Button
            size="$5"
            backgroundColor="$backgroundStrong"
            borderColor="$borderColor"
            borderWidth={1}
            pressStyle={{ scale: 0.98, opacity: 0.9 }}
            hoverStyle={{
              borderColor: '$secondary',
              scale: 1.01,
              backgroundColor: '$background',
              shadowColor: '$secondary',
              shadowOpacity: 0.1,
              shadowRadius: 10,
            }}
            borderRadius="$6"
            animation="quick"
            icon={<Users size="$2" color="$secondary" />}
            $gtMd={{
              width: '48%',
              height: 120,
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '$1',
            }}
          >
            <Text color="$text" fontWeight="600" fontSize="$5">
              Join Room
            </Text>
            <Text color="$textMuted" fontSize="$2">
              Enter code to play
            </Text>
          </Button>

          <Button
            size="$5"
            backgroundColor="$primary" // Primary action can stand out
            pressStyle={{ scale: 0.98, opacity: 0.9 }}
            hoverStyle={{ opacity: 0.9, scale: 1.01 }}
            borderRadius="$6"
            animation="quick"
            icon={<Zap size="$2" color="white" />}
            $gtMd={{
              width: '100%',
              flex: 1,
              marginTop: 0,
              height: 60, // Slimmer for quick play
              flexDirection: 'row', // Keep horizontal
            }}
          >
            <Text color="white" fontWeight="700" fontSize="$5">
              Quick Play
            </Text>
          </Button>
        </XStack>

        {/* Features Section */}
        <XStack
          justifyContent="space-between"
          width="100%"
          maxWidth={360}
          marginTop="$6"
          gap="$3"
          $gtMd={{
            maxWidth: '100%',
            marginTop: '$4',
            opacity: 0.7, // Subtle
          }}
        >
          {[
            { Icon: Trophy, text: 'Rankings' },
            { Icon: Clock, text: 'History' },
            { Icon: Globe, text: 'Global' },
          ].map(({ Icon, text }) => (
            <View
              key={text}
              flex={1}
              alignItems="center"
              padding="$3"
              borderRadius="$4"
              // backgroundColor="$backgroundStrong" // Remove background for cleaner look
              // borderWidth={1}
              // borderColor="$borderColor"
              hoverStyle={{ opacity: 1, backgroundColor: '$backgroundStrong' }}
              animation="quick"
              cursor="pointer"
            >
              <Icon size="$4" color="$textMuted" marginBottom="$1" />
              <Paragraph size="$2" color="$textMuted" textAlign="center">
                {text}
              </Paragraph>
            </View>
          ))}
        </XStack>
      </YStack>

      {/* Version */}
      <Paragraph
        position="absolute"
        bottom={40}
        right={0}
        left={0}
        textAlign="center"
        size="$1"
        color="$textMuted" // Faint
        opacity={0.3}
        $gtMd={{
          bottom: 20,
          right: 20,
          left: 'auto',
          textAlign: 'right',
        }}
      >
        v1.0.1
      </Paragraph>
    </YStack>
  );
}
