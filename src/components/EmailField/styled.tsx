import styled from "styled-components"

export const Section = styled.section`
  display: flex;
  margin-top: 1.5rem;
  
  div {
    position: relative
  }

  div svg {
    position: absolute;
    margin: 1rem .5rem;
    font-size: 1.2rem;
    opacity: .7;
  }

  button {
    background-color: var(--main-color);
    border: none;
    padding: 0 1.5rem;
    color: #fafafa;
    cursor: pointer;
    transition: all .4s ease-out;
  }

  button:hover {
    background: transparent;
    border: 2px solid var(--main-color);
    color: var(--main-color);
  }
`

export const Input = styled.input`
  padding: 1rem 0 1rem 2.5rem;
  border: none;
  width: 22rem;

  &:focus {
    outline: none;
  }

  @media (max-width: 1100px) {
    & {
      width: auto;
    }
  }
`