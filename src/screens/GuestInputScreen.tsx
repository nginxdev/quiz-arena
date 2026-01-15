import { useState } from 'react';
import { YStack, XStack, H2, Paragraph, Input, Button } from 'tamagui';
import { ArrowLeft } from '@tamagui/lucide-icons';

interface GuestInputScreenProps {
  onBack: () => void;
  onContinue: (name: string) => void;
}

export function GuestInputScreen({
  onBack,
  onContinue,
}: GuestInputScreenProps) {
  const [name, setName] = useState('');

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
    >
      <YStack
        gap="$4"
        width="100%"
        $gtMd={{
          width: 360, // Slightly tighter width
          borderWidth: 1,
          borderColor: '$borderColor', // Ideally semi-transparent
          padding: '$6', // Standardized to $8
          borderRadius: '$8', // Standardized to $8
          backgroundColor: '$background', // Solid background for clarity or keep backgroundStrong
          shadowColor: 'black',
          shadowRadius: 40,
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: 10 },
        }}
      >
        <XStack alignItems="center" gap="$2" marginBottom="$2">
          <Button
            chromeless
            icon={ArrowLeft}
            onPress={onBack}
            color="$textMuted"
            pressStyle={{ opacity: 0.7 }}
            size="$3"
          />
          <H2 size="$6" color="$text">
            Guest Access
          </H2>
        </XStack>

        <YStack gap="$2" marginTop="$2">
          <Input
            size="$4"
            borderWidth={1}
            borderColor="$borderColor"
            backgroundColor="transparent"
            borderRadius="$4"
            placeholder="Enter your display name"
            placeholderTextColor="$textMuted"
            value={name}
            onChangeText={setName}
            onSubmitEditing={() => onContinue(name || 'Guest')}
            focusStyle={{ borderColor: '$primary', borderWidth: 1 }}
          />
        </YStack>

        <Button
          marginTop="$4"
          size="$4"
          backgroundColor="$primary"
          borderRadius="$6"
          onPress={() => onContinue(name || 'Guest')}
          pressStyle={{ scale: 0.98, opacity: 0.9 }}
          disabled={!name.trim()} // Encourage entering a name? or keeping existing behavior
          opacity={!name.trim() ? 0.8 : 1}
        >
          Start Playing
        </Button>
      </YStack>
    </YStack>
  );
}
