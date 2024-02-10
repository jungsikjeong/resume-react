import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
a {
  color:${({ theme }) => theme.colors.cloudyGray};
  text-decoration: none;
  padding-bottom: .2rem;
  border-bottom: 1px solid #bbb;
  transition: all .2s linear;
  &:hover{
    color:${({ theme }) => theme.colors.break};
  }
}

body {
  color:${({ theme }) => theme.colors.break};
}

p{
  color:#666;
  font-weight: 200;
  margin: 0;
}

@media only screen and (max-width: 768px) {
  body {
          
      }
  }

@media only screen and (max-width: 576px) {
  body {
        
      }
  }
`;

export default GlobalStyle;
