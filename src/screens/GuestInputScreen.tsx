import { useState } from 'react';
import { YStack, XStack, H2, Paragraph, Input, Button } from 'tamagui';
import { ArrowLeft } from '@tamagui/lucide-icons';
import { useTranslation } from 'react-i18next';

interface GuestInputScreenProps {
  onBack: () => void;
  onContinue: (name: string) => void;
}

export function GuestInputScreen({
  onBack,
  onContinue,
}: GuestInputScreenProps) {
  const [name, setName] = useState('');
  const { t } = useTranslation();

  const handleContinue = () => {
    if (name.trim()) {
      onContinue(name);
    }
  };

  return (
    <YStack
      flex={1}
      justifyContent="center"
      alignItems="center"
      animation="snappy"
      enterStyle={{ opacity: 0, y: 0, x: 0, scale: 1 }}
      exitStyle={{ opacity: 0, y: 0, x: 0, scale: 1 }}
      opacity={1}
      paddingHorizontal="$4"
    >
      <YStack
        width="100%"
        gap="$4"
        borderWidth={1}
        borderColor="$borderColor"
        padding="$6"
        borderRadius="$8"
        backgroundColor="$background"
        shadowColor="black"
        shadowRadius={40}
        shadowOpacity={0.1}
        shadowOffset={{ width: 0, height: 10 }}
        $gtMd={{
          width: 360,
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
            {t('guestName')}
          </H2>
        </XStack>

        <YStack gap="$4">
          <Paragraph size="$3" color="$textMuted" marginLeft="$2">
            {t('enterName')}
          </Paragraph>
          <Input
            size="$4"
            borderWidth={1}
            borderColor="$borderColor"
            backgroundColor="transparent"
            borderRadius="$4"
            placeholder={t('enterName')}
            placeholderTextColor="$textMuted"
            value={name}
            onChangeText={setName}
            autoFocus
            focusStyle={{ borderColor: '$primary', borderWidth: 1 }}
            onSubmitEditing={handleContinue}
          />
        </YStack>

        <Button
          marginTop="$4"
          size="$4"
          backgroundColor="$primary"
          borderRadius="$6"
          onPress={handleContinue}
          disabled={!name.trim()}
          opacity={!name.trim() ? 0.5 : 1}
          pressStyle={{ scale: 0.98, opacity: 0.9 }}
          hoverStyle={{ opacity: 0.9 }}
        >
          {t('continue')}
        </Button>
      </YStack>
    </YStack>
  );
}
