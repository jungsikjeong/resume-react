import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeFlag, themeState } from './atoms/theme';
import Router from './components/Router';
import GlobalStyle from './style/global-style';
import theme from './style/theme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRecoilState } from 'recoil';
import { getThemeFromStorage } from './utils/set-theme-to-storage';

import Layout from './components/layout';

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
      <ToastContainer
        position='top-center'
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={currentTheme === 0 ? 'light' : 'dark'}
      />

      <Layout>
        <GlobalStyle />
        <Router />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
