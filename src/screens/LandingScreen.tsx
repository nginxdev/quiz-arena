import { View, YStack, XStack, H1, Paragraph, Button, Text } from 'tamagui';
import { LogIn, User } from '@tamagui/lucide-icons';
import { Logo } from '../components/Logo';
import { useTranslation } from 'react-i18next';

interface LandingScreenProps {
  onSignIn: () => void;
  onGuest: () => void;
}

export function LandingScreen({ onSignIn, onGuest }: LandingScreenProps) {
  const { t } = useTranslation();

  return (
    <YStack
      flex={1}
      justifyContent="center"
      alignItems="center"
      animation="snappy"
      enterStyle={{ opacity: 0, y: 0, x: 0, scale: 1 }}
      exitStyle={{ opacity: 0, y: 0, x: 0, scale: 1 }}
      opacity={1}
      width="100%"
      padding="$4"
      gap="$8"
      $gtMd={{
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: '$8',
      }}
    >
      {/* Logo Section - Top on Mobile, Left on Desktop */}
      <YStack alignItems="center" justifyContent="center">
        <Logo size={220} />
      </YStack>

      {/* Card Section - Bottom on Mobile, Right on Desktop */}
      <YStack
        width="100%"
        maxWidth={360}
        alignItems="center"
        gap="$6"
        padding="$6"
        backgroundColor="$background"
        borderRadius="$8"
        borderWidth={1}
        borderColor="$borderColor"
        shadowColor="$shadowColor"
        shadowRadius={40}
        shadowOpacity={0.1}
        shadowOffset={{ width: 0, height: 10 }}
        $gtMd={{
          maxWidth: 450,
          padding: '$8',
        }}
      >
        {/* Text Section */}
        <YStack alignItems="center" gap="$2">
          <H1
            size="$8"
            color="$color"
            fontWeight="bold"
            textAlign="center"
            marginBottom="$-2"
          >
            {t('welcome')}
          </H1>
          <H1
            size="$9"
            color="$primary"
            fontWeight="900"
            textAlign="center"
            textShadowColor="$shadowColor"
            textShadowRadius={20}
          >
            Quiz Arena
          </H1>
          <Paragraph
            size="$5"
            color="$textMuted"
            textAlign="center"
            marginTop="$2"
            maxWidth={300}
          >
            {t('subtitle')}
          </Paragraph>
        </YStack>

        {/* Action Buttons Section */}
        <YStack width="100%" gap="$4">
          <Button
            size="$6"
            width="100%"
            backgroundColor="$primary"
            icon={<LogIn size="$2" />}
            fontWeight="bold"
            borderRadius="$6"
            pressStyle={{ scale: 0.98, opacity: 0.9 }}
            hoverStyle={{ opacity: 0.9, scale: 1.02 }}
            animation="quick"
            onPress={onSignIn}
          >
            {t('signIn')}
          </Button>

          <XStack alignItems="center" gap="$2">
            <View height={1} flex={1} backgroundColor="$borderColor" />
            <Text color="$textMuted" fontSize="$2" fontWeight="600">
              {t('or').toUpperCase()}
            </Text>
            <View height={1} flex={1} backgroundColor="$borderColor" />
          </XStack>

          <Button
            size="$6"
            width="100%"
            backgroundColor="$backgroundStrong"
            borderColor="$borderColor"
            borderWidth={1}
            icon={<User size="$2" />}
            fontWeight="bold"
            color="$color"
            borderRadius="$6"
            pressStyle={{ scale: 0.98, opacity: 0.9 }}
            hoverStyle={{
              borderColor: '$primary',
              backgroundColor: '$background',
              scale: 1.02,
            }}
            animation="quick"
            onPress={onGuest}
          >
            {t('guest')}
          </Button>
        </YStack>
      </YStack>
    </YStack>
  );
}
