import { ThemeProvider } from 'styled-components';
import Router from './components/Router';
import GlobalStyle from './style/GlobalStyle';
import theme from './style/theme';
import { useContext } from 'react';
import ThemeContext from './context/ThemeContext';

import Layout from './components/Layout';

const App = () => {
  const context = useContext(ThemeContext);
  const themeMode =
    context.theme === 'lightTheme' ? theme.lightTheme : theme.darkTheme;
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
