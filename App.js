import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/theme';

import Home from './src/screens/Home/Home';

export default function App() {
  return (
    <>
      <ThemeProvider theme={ theme }> 
        <Home />
        <StatusBar style="dark" />
      </ThemeProvider>
    </>
  );
}
