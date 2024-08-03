import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
a {
  color:${({ theme }) => theme.colors.cloudyGray};
  text-decoration: none;
  padding-bottom: .2rem;
  border-bottom: 1px solid #bbb;
  transition: all .2s linear;
  &:hover{
    color:${({ theme }) => theme.colorMainFont};
  }
}

ul{
  padding: 0;
  margin: 0;
}

button{
  appearance: none;
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: none;
}

body {
  color:${({ theme }) => theme.colorMainFont};
  background-color:${({ theme }) => theme.colorBg};
  transition: all 0.25s linear;

}

p{
  color:${({ theme }) => theme.colorDarkGray};
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
  color:${({ theme }) => theme.colorRed};

}

.text-bold{
  font-weight: bold;
}

.more{
  color:${({ theme }) => theme.colors.cloudyGray};
  transition: all .2s linear;
  cursor: pointer;
  &:hover{
    color:${({ theme }) => theme.colorMainFont};
  }
}


@media only screen and (max-width: 768px) {
  body {
          
      }
  }

@media only screen and (max-width: 576px) {
  body {
        
      }
  }
`

export default GlobalStyle
