import styled from "styled-components";

const Hamburger = styled.div`
  flex-direction: column;
  display: none;
  cursor: pointer;
  div {
    width: 25px;
    height: 2px;
    margin-bottom: 4px;
    border-radius: 5px;
    background: aliceblue;
    background-color: ${({ isOpen }) => (isOpen ? "aliceblue" : "aliceblue")};
    transition: all 0.3s linear;
    &.line1 {
      transform: ${({ isOpen }) => (isOpen ? "rotate(-330deg)" : "rotate(0)")};
    }
    &.line2 {
      transform: ${({ isOpen }) =>
        isOpen ? "translateX(100%)" : "translateX(0)"};
      opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
    }
    &.line3 {
      transform: ${({ isOpen }) => (isOpen ? "rotate(330deg)" : "rotate(0)")};
    }
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;

export default Hamburger