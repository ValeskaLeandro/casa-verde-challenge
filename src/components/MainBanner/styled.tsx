import styled from "styled-components"

export const Section = styled.section`
  display: flex;
  justify-content: center;

  aside {
    flex: 1;
  }

  .container-titles {
    display: flex;    
    width: 70%;
  }
  @media (max-width: 1100px) {
    aside {
      display: none;
    }
  }

  @media (max-width: 600px) {
    .container-titles {
      width: 90%
    }
  }
`
export const Main = styled.main`
  margin-top: 12rem;
  margin-bottom: 1.25rem;
  flex: 1;
  h1, p {
    width: 90%;
  }

  h1 {
    margin-bottom: 1.5rem;
  }

  

  @media (max-width: 600px) {
    & {
      width: 90%
    }
  }
`

