import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';
import { useFonts } from 'expo-font';
import {
  TamaguiProvider,
  View,
  YStack,
  Theme,
  useTheme,
  AnimatePresence,
} from 'tamagui';
import config from './tamagui.config';

// Screens
import { LandingScreen } from './src/screens/LandingScreen';
import { SignInScreen } from './src/screens/SignInScreen';
import { GuestInputScreen } from './src/screens/GuestInputScreen';
import { DashboardScreen } from './src/screens/DashboardScreen';
import { ParticlesBackground } from './src/components/ParticlesBackground';
import { Session } from '@supabase/supabase-js';
import './src/i18n';
import { supabase } from './src/lib/supabase';

type Screen = 'landing' | 'signIn' | 'guestInput' | 'dashboard';

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
        <AppContent />
      </Theme>
    </TamaguiProvider>
  );
}

function AppContent() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('landing');
  const [userName, setUserName] = useState('');
  const theme = useTheme();

  useEffect(() => {
    // Check initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        setUserName(session.user.email?.split('@')[0] || 'User');
        setCurrentScreen('dashboard');
      }
    });

    // Listen for changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session: Session | null) => {
      if (session) {
        setUserName(session.user.email?.split('@')[0] || 'User');
        setCurrentScreen('dashboard');
      } else {
        // If we were on dashboard or sign-in, go back to landing
        // But if on guest input, maybe stay? For simplicity, go landing.
        setCurrentScreen('landing');
        setUserName('');
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleGuestLogin = (name: string) => {
    setUserName(name);
    setCurrentScreen('dashboard');
  };

  const handleSupabaseLogin = () => {
    // Handled by onAuthStateChange
    console.log('Login initiated...');
  };

  return (
    <View flex={1} backgroundColor="$background">
      <LinearGradient
        colors={[theme.background.get(), theme.backgroundStrong.get()]}
        style={{ flex: 1 }}
      >
        <ParticlesBackground />
        <StatusBar style="light" />
        <YStack
          flex={1}
          paddingHorizontal="$4"
          paddingTop="$8"
          $gtMd={{
            paddingHorizontal: '$6',
            paddingTop: '$6',
            alignItems: 'center',
          }}
        >
          <AnimatePresence exitBeforeEnter>
            {currentScreen === 'landing' && (
              <LandingScreen
                key="landing"
                onSignIn={() => setCurrentScreen('signIn')}
                onGuest={() => setCurrentScreen('guestInput')}
              />
            )}
            {currentScreen === 'signIn' && (
              <SignInScreen
                key="signIn"
                onBack={() => setCurrentScreen('landing')}
                onLogin={handleSupabaseLogin}
              />
            )}
            {currentScreen === 'guestInput' && (
              <GuestInputScreen
                key="guestInput"
                onBack={() => setCurrentScreen('landing')}
                onContinue={handleGuestLogin}
              />
            )}
            {currentScreen === 'dashboard' && (
              <DashboardScreen key="dashboard" userName={userName} />
            )}
          </AnimatePresence>
        </YStack>
      </LinearGradient>
    </View>
  );
}
