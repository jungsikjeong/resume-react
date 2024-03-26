import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import Router from './components/Router';
import ThemeContext from './context/theme-context';
import GlobalStyle from './style/GlobalStyle';
import theme from './style/theme';

import Layout from './components/layout';

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
