import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { AuthProvider } from './firebase/AuthProvider';
import { ProfileProvider } from './firebase/ProfileProvider';
import { JourneyProvider } from './firebase/JourneyProvider';
import Routes from './routes/Routes';
import theme from './core/theme';

const App = () => {
  return (
    <AuthProvider>
      <ProfileProvider>
        <JourneyProvider>
          <PaperProvider theme={theme}>
            <Routes />
          </PaperProvider>
        </JourneyProvider>
      </ProfileProvider>
    </AuthProvider>
  );
};

export default App;
