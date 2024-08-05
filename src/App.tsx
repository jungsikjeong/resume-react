import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeFlag, themeState } from './atoms/theme';
import Router from './components/Router';
import GlobalStyle from './style/global-style';
import theme from './style/theme';

import { useRecoilState } from 'recoil';
import Layout from './components/layout';
import { getThemeFromStorage } from './utils/set-theme-to-storage';

const App = () => {
  const [currentTheme, setCurrentTheme] = useRecoilState(themeState);

  const themeMode =
    currentTheme === ThemeFlag.light ? theme.lightTheme : theme.darkTheme;

  useEffect(() => {
    const storageTheme = getThemeFromStorage();

    if (storageTheme !== undefined) {
      setCurrentTheme(storageTheme);
    }
  }, []);
  return (
    <ThemeProvider theme={themeMode}>
      <Layout>
        <GlobalStyle />
        <Router />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
