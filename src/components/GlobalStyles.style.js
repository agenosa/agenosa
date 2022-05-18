import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  color: white;
  background-color: #131313;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}
.MuiCardContent-root{
  padding-bottom:16px;
  
}
.large-font{
  font-size:48px;
  text-align:center;
}

a{
  color:white;
}

.link {
  text-decoration: none;
  color:aliceblue;
  
}



.project-link {
  text-decoration: underline;
  color:aliceblue;

}




`;
