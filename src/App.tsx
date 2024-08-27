import { Suspense, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeFlag, themeState } from './atoms/theme';
import GlobalStyle from './style/global-style';
import theme from './style/theme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRecoilState } from 'recoil';
import { getThemeFromStorage } from './utils/set-theme-to-storage';

import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import Loading from './components/common/loading';

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
    <Suspense fallback={<Loading />}>
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

        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Suspense>
  );
};

export default App;
