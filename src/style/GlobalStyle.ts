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

ul{
  padding: 0;
  margin: 0;
}

body {
  color:${({ theme }) => theme.colors.break};
}

p{
  color:#666;
  font-weight: 200;
  margin: 0;
}

.nesting-ul{
  display: flex;
  flex-direction:column;
  gap:10px;
  padding-top: .5rem;
  padding-left: 1rem;
  
  li{
    line-height: 22px;
  }
}

.what-i-did-image{
  /* width:250px; */
  height: 450px;
  object-fit: contain;
}

.tomato {
  color:tomato;
}

.text-bold{
  font-weight: bold;
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
