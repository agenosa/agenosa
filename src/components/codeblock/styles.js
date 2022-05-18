import styled from "styled-components";

export const Wrapper = styled.div`
  font-family: sans-serif;
  text-align: center;
 
`;
export const Pre = styled.pre`

  text-align: left;
  margin: 0;
  padding: 2.5em;
  max-width: 680px;
  overflow-y: scroll;
  height:380px;
  & .token-line {
    line-height: 1.3em;
    height: 1.3em;
  }
  border-radius:10px;

  
  @media screen and (max-width: 768px) {

    min-height:150px;
    height:100%;
    width:100%;
  }

`;

export const Line = styled.div`
  display: table-row;
`;

export const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`;

export const LineContent = styled.span`
  display: table-cell;
`;

