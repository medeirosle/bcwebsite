import { useState, useEffect } from "react";

import logo from "./assets/Logao_BC_escuro.png";
import logoInsta from "./assets/LogoInsta.png";
import logoYoutube from "./assets/LogoYoutube.png";
import logoMobileMenu from "./assets/menu.png";

function Nav() {
  const [isMobileMenuActive, setMobileMenuActive] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const toggleMenu = () => {
    setMobileMenuActive(!isMobileMenuActive);
  };

  function logit() {
    setScrollY(window.pageYOffset);    
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });

  return (
    <>
      <a
        href="#"
        className={scrollY <= 50 ? "btn btnScrollHidden" : "btn btnScrollShow"}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div                        
            style={{
              textDecoration: "none",
              border: 0,
              width: "48px",
              height: "48px",
              padding: "4px",
              margin: "20px",
              color: "#001031",
              borderRadius: "50%",
              backgroundColor: "#ff8532",
              boxShadow: "3px 3px"
            }}
          >
            <svg width="100%" height="100%" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path fill-rule="evenodd" clip-rule="evenodd" d="M7.50001 3.79291L10.2071 6.50001L9.50001 7.20712L8.00001 5.70712V11H7.00001V5.70712L5.50001 7.20712L4.7929 6.50001L7.50001 3.79291Z" fill="black"/> </svg>
          </div>
        </div>
      </a>
      <header>
        <nav>
          <div className="desktopNavItem">
            <a href="#agenda">Agenda</a>
          </div>
          <div className="desktopNavItem">
            <a href="#sobre">Sobre</a>
          </div>
          <div className="desktopNavItem">
            <a href="#musica">Música</a>
          </div>
          <img src={logo} className="logoBC" />
          <div className="desktopNavItem">
            <a href="#fotosEvideos">Fotos & Vídeos</a>
          </div>
          <div className="desktopNavItem">
            <a href="#loja">Loja</a>
          </div>
          <div className="desktopNavItem">
            <a href="#contato">Contato</a>
          </div>
        </nav>
      </header>

      <nav className={isMobileMenuActive ? "mobileMenu show" : "mobileMenu"}>
        <div className="navItem">
          <a href="#agenda" onClick={() => setMobileMenuActive(false)}>
            Agenda
          </a>
        </div>
        <div className="navItem">
          <a href="#sobre" onClick={() => setMobileMenuActive(false)}>
            Sobre
          </a>
        </div>
        <div className="navItem">
          <a href="#musica" onClick={() => setMobileMenuActive(false)}>
            Música
          </a>
        </div>
        <div className="navItem">
          <a href="#fotosEvideos" onClick={() => setMobileMenuActive(false)}>
            Fotos & Vídeos
          </a>
        </div>
        <div className="navItem">
          <a href="#loja" onClick={() => setMobileMenuActive(false)}>
            Loja
          </a>
        </div>
        <div className="navItem">
          <a href="#contato" onClick={() => setMobileMenuActive(false)}>
            Contato
          </a>
        </div>
      </nav>

      <div className="menu-icon">
        <div
          className="socialMediaButtons"
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <a
            href="https://www.instagram.com/bruxariabanda/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              border: 0,
              width: "50px",
              height: "50px",
              padding: "2px",
              margin: "5px",
              color: "#001031",
              borderRadius: "35%",
              backgroundColor: "#ff8532",
            }}
          >
            <svg
              className="niftybutton-instagram"
              style={{ display: "block", fill: "currentColor" }}
              data-donate="true"
              data-tag="ins"
              data-name="Instagram"
              viewBox="0 0 512 512"
              preserveAspectRatio="xMidYMid meet"
            >
              <title>Instagram social icon</title>
              <path d="M256 109.3c47.8 0 53.4 0.2 72.3 1 17.4 0.8 26.9 3.7 33.2 6.2 8.4 3.2 14.3 7.1 20.6 13.4 6.3 6.3 10.1 12.2 13.4 20.6 2.5 6.3 5.4 15.8 6.2 33.2 0.9 18.9 1 24.5 1 72.3s-0.2 53.4-1 72.3c-0.8 17.4-3.7 26.9-6.2 33.2 -3.2 8.4-7.1 14.3-13.4 20.6 -6.3 6.3-12.2 10.1-20.6 13.4 -6.3 2.5-15.8 5.4-33.2 6.2 -18.9 0.9-24.5 1-72.3 1s-53.4-0.2-72.3-1c-17.4-0.8-26.9-3.7-33.2-6.2 -8.4-3.2-14.3-7.1-20.6-13.4 -6.3-6.3-10.1-12.2-13.4-20.6 -2.5-6.3-5.4-15.8-6.2-33.2 -0.9-18.9-1-24.5-1-72.3s0.2-53.4 1-72.3c0.8-17.4 3.7-26.9 6.2-33.2 3.2-8.4 7.1-14.3 13.4-20.6 6.3-6.3 12.2-10.1 20.6-13.4 6.3-2.5 15.8-5.4 33.2-6.2C202.6 109.5 208.2 109.3 256 109.3M256 77.1c-48.6 0-54.7 0.2-73.8 1.1 -19 0.9-32.1 3.9-43.4 8.3 -11.8 4.6-21.7 10.7-31.7 20.6 -9.9 9.9-16.1 19.9-20.6 31.7 -4.4 11.4-7.4 24.4-8.3 43.4 -0.9 19.1-1.1 25.2-1.1 73.8 0 48.6 0.2 54.7 1.1 73.8 0.9 19 3.9 32.1 8.3 43.4 4.6 11.8 10.7 21.7 20.6 31.7 9.9 9.9 19.9 16.1 31.7 20.6 11.4 4.4 24.4 7.4 43.4 8.3 19.1 0.9 25.2 1.1 73.8 1.1s54.7-0.2 73.8-1.1c19-0.9 32.1-3.9 43.4-8.3 11.8-4.6 21.7-10.7 31.7-20.6 9.9-9.9 16.1-19.9 20.6-31.7 4.4-11.4 7.4-24.4 8.3-43.4 0.9-19.1 1.1-25.2 1.1-73.8s-0.2-54.7-1.1-73.8c-0.9-19-3.9-32.1-8.3-43.4 -4.6-11.8-10.7-21.7-20.6-31.7 -9.9-9.9-19.9-16.1-31.7-20.6 -11.4-4.4-24.4-7.4-43.4-8.3C310.7 77.3 304.6 77.1 256 77.1L256 77.1z" />
              <path d="M256 164.1c-50.7 0-91.9 41.1-91.9 91.9s41.1 91.9 91.9 91.9 91.9-41.1 91.9-91.9S306.7 164.1 256 164.1zM256 315.6c-32.9 0-59.6-26.7-59.6-59.6s26.7-59.6 59.6-59.6 59.6 26.7 59.6 59.6S288.9 315.6 256 315.6z" />
              <circle cx="351.5" cy="160.5" r="21.5" />
            </svg>
          </a>
          <a
            href="https://www.youtube.com/@BruxariaCaicara"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              border: 0,
              width: "50px",
              height: "50px",
              padding: "2px",
              margin: "5px",
              color: "#001031",
              borderRadius: "35%",
              backgroundColor: "#ff8532",
            }}
          >
            <svg
              className="niftybutton-youtube"
              style={{ display: "block", fill: "currentColor" }}
              data-donate="true"
              data-tag="you"
              data-name="YouTube"
              viewBox="0 0 512 512"
              preserveAspectRatio="xMidYMid meet"
            >
              <title>YouTube social icon</title>
              <path d="M422.6 193.6c-5.3-45.3-23.3-51.6-59-54 -50.8-3.5-164.3-3.5-215.1 0 -35.7 2.4-53.7 8.7-59 54 -4 33.6-4 91.1 0 124.8 5.3 45.3 23.3 51.6 59 54 50.9 3.5 164.3 3.5 215.1 0 35.7-2.4 53.7-8.7 59-54C426.6 284.8 426.6 227.3 422.6 193.6zM222.2 303.4v-94.6l90.7 47.3L222.2 303.4z" />
            </svg>
          </a>
        </div>
        <a
          src={logoMobileMenu}
          className="logoSocialNetwork logoMenu"
          onClick={() => toggleMenu()}
        >☰</a>
      </div>
    </>
  );
}

export default Nav;
