import styled from "styled-components"

export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;

  @media (max-width: 950px){
    & {
      position: fixed;
      top: 0;
      z-index: 1;
      width: 100%;
    } 
  }
`

export const Ul = styled.ul`
  display: flex;
  list-style: none;
  font-weight: bold;

  a {
    text-decoration: none;    
    color: var(--text-color);
    transition: all .3s ease-in-out;
  }

  a:hover {
    border-bottom: 2px solid var(--text-color);
  }

  li:not(:last-child)::after{
    content: '/';
    margin: 1.3rem;
  }

  @media (max-width: 950px){
    & {
      flex-direction: column;
      position: fixed;
      height: 100%;
      width: 70%;
      top: 0;
      right: -100%;
      align-items: baseline;

      background-color:  var(--main-color); 
      align-items: center;
      padding: 1.5rem;
      font-size: 1.5rem;
    }

    li::after {
      display: none;
    }

    li, a {
      width: 100%;
      padding: 1rem;
      transition: all .5s ease-in-out;
    }
    li:hover {
      border-bottom: 2px solid #fafafa;
    }

    a:hover {
      color: #fafafa;
      border-bottom: none;
    }

    &.open-menu {
      transition: all 0.5s ease-in-out;
      right: 0;
    }

    &.close-menu{
      transition: all 0.5s ease-in-out;
    }
  }

  @media (max-width: 400px){
    & {
      font-size: 1rem;
      width: 90%;
    }
  }
`

export const IconMenuMobile = styled.div`
  & {
    display: none;
  }
  @media (max-width: 950px){
    & {
      display: block;
    }

    svg {
      font-size: 2.5rem;
      color: var(--text-color);
      opacity: .9;
    }
  }
`