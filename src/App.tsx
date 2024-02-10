import { ThemeProvider } from 'styled-components';
import Router from './components/Router';
import GlobalStyle from './style/GlobalStyle';
import theme from './style/theme';
import Layout from './components/Layout';

const App = () => {
  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </Layout>
  );
};

export default App;
