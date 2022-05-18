import styled from "styled-components";

const StyledProjectContainer = styled.div`
  min-height: 500px;
  max-width: 800px;
  margin: 32px 8px 48px 8px;
  border: 1.75px solid #fff;


  p {
    padding: 32px 16px;
    margin: 0 0;
  }

  .project-header {
    padding: 32px 16px 0 16px;
    display: flex;
    justify-content: space-between;
    & h1 {
      margin: 0;
    }
  }

  .project-header-text{
    display:flex;
    align-items: center;
  }

  &.last-project {
    margin-bottom: 96px;
  }
  &.first-project {
    margin-top: 60px;
  }
  @media screen and (max-width: 768px) {

    
    .project-header-text{
    width:max-content;
  }

  


  &.last-project {
    margin-bottom: 96px;
  }
  &.first-project {
    margin-top: 60px;
  }
    .project-header {
      text-align: -webkit-center;
      padding: 0;

      display: block;


      & h1 {
        margin: 0;
      }
    }
    p {
      padding: 0px 16px 32px 16px;
    }

    img {
      padding: 8px;
    }

    margin: 32px 8px 64px 8px;

    display: flex;

    flex-direction: column;
    padding: 0;
    h1 {
      padding-left: 0px;
    }
    &.last-project {
      margin-bottom: 90px;
    }
   

    display: flex;
    flex-direction: column;
    padding: 0;
    h1 {
      padding-top: 44px;
      padding-left: 0px;
      text-align: center;
    }

    video {
      max-width: 640px;
    }
  }
`;

export default StyledProjectContainer;
