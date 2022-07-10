import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }
 
 body{
  font-family: 'Roboto', sans-serif;
  background-color: ${({ theme }) => theme.brand.colors.backgroundColor}; 
 }

 ol, ul {
	list-style: none;
}

blockquote, q {
	quotes: none;
}

a{
  text-decoration: none;
}

button{
  border: none;
  cursor: pointer;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}
`;
