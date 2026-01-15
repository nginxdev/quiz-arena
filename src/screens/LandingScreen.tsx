import { View, YStack, H1, Paragraph, Button } from 'tamagui';
import { LogIn, User } from '@tamagui/lucide-icons';
import { Logo } from '../components/Logo';

interface LandingScreenProps {
  onSignIn: () => void;
  onGuest: () => void;
}

export function LandingScreen({ onSignIn, onGuest }: LandingScreenProps) {
  return (
    <YStack
      flex={1}
      justifyContent="center"
      alignItems="center"
      animation="snappy"
      enterStyle={{ opacity: 0, y: 0, x: 0, scale: 1 }}
      exitStyle={{ opacity: 0, y: 0, x: 0, scale: 1 }}
      opacity={1}
      gap="$6"
      $gtMd={{
        flexDirection: 'row',
        gap: '$6',
        maxWidth: 850,
        width: '100%',
        justifyContent: 'center',
        paddingHorizontal: '$6',
      }}
    >
      {/* Visual / Icon Section */}
      <YStack
        justifyContent="center"
        alignItems="center"
        marginBottom="$2"
        $gtMd={{
          marginBottom: 0,
        }}
      >
        <YStack display="none" $gtMd={{ display: 'flex' }}>
          <Logo size={220} />
        </YStack>
        <YStack display="flex" $gtMd={{ display: 'none' }}>
          <Logo size={80} />
        </YStack>
      </YStack>

      {/* Content Section */}
      <YStack
        alignItems="center"
        $gtMd={{
          alignItems: 'flex-start',
          maxWidth: 450,
          gap: '$3',
          justifyContent: 'center',
          // Card Styling
          backgroundColor: '$background',
          borderWidth: 1,
          borderColor: '$borderColor',
          borderRadius: '$8',
          padding: '$6',
          shadowColor: 'black',
          shadowRadius: 40,
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: 10 },
        }}
        gap="$2"
      >
        <YStack alignItems="center" $gtMd={{ alignItems: 'flex-start' }}>
          <H1
            size="$8"
            fontWeight="500" // More elegant weight
            color="$textMuted"
            textAlign="center"
            $gtMd={{
              size: '$7',
              textAlign: 'left',
            }}
            marginBottom="$-2"
          >
            Welcome to
          </H1>
          <H1
            size="$9"
            fontWeight="800"
            color="$primary"
            textAlign="center"
            $gtMd={{
              size: '$9',
              textAlign: 'left',
            }}
            lineHeight="$9"
          >
            Quiz Arena
          </H1>
          <Paragraph
            size="$4"
            color="$textMuted"
            textAlign="center"
            maxWidth={300}
            marginTop="$2"
            $gtMd={{
              textAlign: 'left',
              size: '$5',
              maxWidth: 400,
              marginTop: '$3',
              lineHeight: '$4',
            }}
          >
            The ultimate multiplayer trivia battleground.
          </Paragraph>
        </YStack>

        <YStack
          width="100%"
          maxWidth={300}
          gap="$3"
          marginTop="$6"
          $gtMd={{
            marginTop: '$5',
            maxWidth: 380,
            flexDirection: 'row',
          }}
        >
          <Button
            size="$5" // Smaller, refined button
            backgroundColor="$primary"
            borderRadius="$8"
            icon={<LogIn size="$1.5" />}
            onPress={onSignIn}
            animation="quick"
            pressStyle={{ scale: 0.97, opacity: 0.9 }}
            hoverStyle={{ opacity: 0.9 }}
            $gtMd={{
              flex: 1,
            }}
          >
            Sign In
          </Button>
          <Button
            size="$5"
            backgroundColor="transparent"
            borderColor="$borderColor"
            borderWidth={1}
            borderRadius="$8"
            icon={<User size="$1.5" />}
            onPress={onGuest}
            animation="quick"
            pressStyle={{ scale: 0.97, backgroundColor: '$backgroundStrong' }}
            hoverStyle={{
              borderColor: '$primary',
              backgroundColor: '$backgroundHover',
            }}
            $gtMd={{
              flex: 1,
            }}
          >
            Guest
          </Button>
        </YStack>
      </YStack>
    </YStack>
  );
}
