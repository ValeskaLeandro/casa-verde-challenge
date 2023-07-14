import {Header, Ul, IconMenuMobile} from "./styled"
import { useState, useEffect } from "react"

import {BiMenu, BiX} from "react-icons/bi"

const Menu = () => {
  const [windowWidth, setWindowWidth] = useState<number>(0)
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [openMenu, setOpenMenu] = useState<boolean>(false)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    if(windowWidth < 950) setIsMobile(true); 
    else setIsMobile(false)
    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);

  return (
    <Header>
      <img src="/logo.svg" alt="Logotipo - Casa Verde" />
      <nav>
        <Ul className={`${ isMobile && openMenu ? "open-menu" : "close-menu" }`} onClick={isMobile ? () => setOpenMenu(!openMenu) : undefined} >
          <li><a href="#">Como fazer</a></li>
          <li><a href="#">Ofertas</a></li>
          <li><a href="#">Depoimentos</a></li>
          <li><a href="#">Vídeos</a></li>
          <li><a href="#">Meu carrinho</a></li>
        </Ul>
      </nav>
      <IconMenuMobile onClick={() => setOpenMenu(!openMenu)}>
        {openMenu ?  <BiX /> : <BiMenu color="#6f8272"/>}
      </IconMenuMobile>
    </Header>
  )
}

export default Menu