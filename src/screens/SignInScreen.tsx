import { useState } from 'react';
import { YStack, XStack, H2, Paragraph, Input, Button } from 'tamagui';
import { ArrowLeft } from '@tamagui/lucide-icons';
import { signInWithEmail } from '../services/auth';

interface SignInScreenProps {
  onBack: () => void;
  onLogin: () => void;
}

export function SignInScreen({ onBack, onLogin }: SignInScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    const { error } = await signInWithEmail(email, password);
    setLoading(false);
    if (!error) {
      onLogin();
    } else {
      alert('Login failed: ' + error.message);
    }
  };

  return (
    <YStack
      flex={1}
      justifyContent="center"
      alignItems="center" // Center horizontally
      animation="snappy"
      enterStyle={{ opacity: 0, y: 0, x: 0, scale: 1 }}
      exitStyle={{ opacity: 0, y: 0, x: 0, scale: 1 }}
      opacity={1}
      paddingHorizontal="$4"
    >
      <YStack
        width="100%"
        gap="$4"
        $gtMd={{
          width: 360, // Consistent width
          borderWidth: 1,
          borderColor: '$borderColor',
          padding: '$6',
          borderRadius: '$8',
          backgroundColor: '$background',
          shadowColor: 'black',
          shadowRadius: 40,
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: 10 },
        }}
      >
        <XStack alignItems="center" gap="$2" marginBottom="$4">
          <Button
            chromeless
            icon={ArrowLeft}
            onPress={onBack}
            color="$textMuted"
            size="$3"
            pressStyle={{ opacity: 0.7 }}
          />
          <H2 size="$6" color="$text">
            Sign In
          </H2>
        </XStack>

        <YStack gap="$4">
          <YStack gap="$2">
            <Paragraph size="$3" color="$textMuted" marginLeft="$2">
              Email
            </Paragraph>
            <Input
              size="$4"
              borderWidth={1}
              borderColor="$borderColor"
              backgroundColor="transparent"
              borderRadius="$4"
              placeholder="Enter your email"
              placeholderTextColor="$textMuted"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              focusStyle={{ borderColor: '$primary', borderWidth: 1 }}
            />
          </YStack>
          <YStack gap="$2">
            <Paragraph size="$3" color="$textMuted" marginLeft="$2">
              Password
            </Paragraph>
            <Input
              size="$4"
              borderWidth={1}
              borderColor="$borderColor"
              backgroundColor="transparent"
              borderRadius="$4"
              placeholder="Enter your password"
              placeholderTextColor="$textMuted"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              focusStyle={{ borderColor: '$primary', borderWidth: 1 }}
            />
          </YStack>
        </YStack>

        <Button
          marginTop="$4"
          size="$4"
          backgroundColor="$primary"
          borderRadius="$6"
          onPress={handleLogin}
          disabled={loading}
          opacity={loading ? 0.7 : 1}
          pressStyle={{ scale: 0.98, opacity: 0.9 }}
          hoverStyle={{ opacity: 0.9 }}
        >
          {loading ? 'Signing in...' : 'Login with Supabase'}
        </Button>
      </YStack>
    </YStack>
  );
}
