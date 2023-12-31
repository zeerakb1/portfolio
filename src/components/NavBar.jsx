import { Navbar, Nav, Container } from 'react-bootstrap';
import React, { useEffect, useState, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import endpoints from '../constants/endpoints';
import '../css/navbar.css';

const styles = {
  logoStyle: {
    width: 50,
    height: 40,
  },
};

const ExternalNavLink = styled.a`
  color: ${(props) => props.theme.navbarTheme.linkColor};
  &:hover {
    color: ${(props) => props.theme.navbarTheme.linkHoverColor};
  }
  &::after {
    background-color: ${(props) => props.theme.accentColor};
  }
`;

const InternalNavLink = styled.a`
  color: ${(props) => props.theme.navbarTheme.linkColor};
  &:hover {
    color: ${(props) => props.theme.navbarTheme.linkHoverColor};
  }
  &::after {
    background-color: ${(props) => props.theme.accentColor};
  }
`;

const NavBar = () => {
  const theme = useContext(ThemeContext);
  const [data, setData] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setShowNav(currentScrollPos < scrollPos || currentScrollPos < 100);
    setScrollPos(currentScrollPos);
  };

  // const smoothScroll = (id) => {
  //   const element = document.getElementById(id);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //   }
  // };
  const smoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 75; // Adjust this value for the desired spacing
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    fetch(endpoints.navbar, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPos]);

  return (
    <Navbar
      fixed="top"
      marginBottom="100px"
      expand="md"
      className={`navbar-custom ${showNav ? 'navVisible' : 'navHidden'}`}
      variant="dark"
      expanded={expanded}
    >
      <Container>
        {data?.logo && (
          <Navbar.Brand href="/">
            <img
              src={data?.logo?.source}
              className="d-inline-block align-top"
              alt="main logo"
              style={data?.logo?.height && data?.logo?.width
                ? { height: data?.logo?.height, width: data?.logo?.width }
                : styles.logoStyle}
            />
          </Navbar.Brand>
        )}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" />
          <Nav>
            {data && data.sections?.map((section) => (
              section?.type === 'link' ? (
                <ExternalNavLink
                  key={section.title}
                  href={section.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setExpanded(false)}
                  className="navbar__link"
                  theme={theme}
                >
                  {section.title}
                </ExternalNavLink>
              ) : (
                <InternalNavLink
                  key={section.title}
                  onClick={(e) => {
                    e.preventDefault();
                    setExpanded(false);
                    smoothScroll(section.href.substring(1));
                  }}
                  className="navbar__link"
                  theme={theme}
                >
                  {section.title}
                </InternalNavLink>
              )
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

// import { Navbar, Nav, Container } from 'react-bootstrap';
// import React, { useEffect, useState, useContext } from 'react';
// import { withRouter } from 'react-router';
// import { NavLink } from 'react-router-dom';
// import styled, { ThemeContext } from 'styled-components';
// import endpoints from '../constants/endpoints';
// import '../css/navbar.css';

// const styles = {
//   logoStyle: {
//     width: 50,
//     height: 40,
//   },
// };

// const ExternalNavLink = styled.a`
//   color: ${(props) => props.theme.navbarTheme.linkColor};
//   &:hover {
//     color: ${(props) => props.theme.navbarTheme.linkHoverColor};
//   }
//   &::after {
//     background-color: ${(props) => props.theme.accentColor};
//   }
// `;

// const InternalNavLink = styled(NavLink)`
//   color: ${(props) => props.theme.navbarTheme.linkColor};
//   &:hover {
//     color: ${(props) => props.theme.navbarTheme.linkHoverColor};
//   }
//   &::after {
//     background-color: ${(props) => props.theme.accentColor};
//   }
//   &.navbar__link--active {
//     color: ${(props) => props.theme.navbarTheme.linkActiveColor};
//   }
// `;

// const NavBar = () => {
//   const theme = useContext(ThemeContext);
//   const [data, setData] = useState(null);
//   const [expanded, setExpanded] = useState(false);
//   const [showNav, setShowNav] = useState(true);
//   const [scrollPos, setScrollPos] = useState(0);

//   const handleScroll = () => {
//     const currentScrollPos = window.scrollY;
//     if (currentScrollPos > scrollPos) {
//       setShowNav(false);
//     } else {
//       setShowNav(true);
//     }
//     setScrollPos(currentScrollPos);
//   };

//   useEffect(() => {
//     fetch(endpoints.navbar, {
//       method: 'GET',
//     })
//       .then((res) => res.json())
//       .then((res) => setData(res))
//       .catch((err) => err);
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <Navbar
//       fixed="top"
//       marginBottom="100px"
//       expand="md"
//       className={`navbar-custom && ${showNav ? 'navVisible' : 'navHidden'}`}
//       variant="dark"
//       expanded={expanded}
//     >
//       <Container>
//         {data?.logo && (
//           <Navbar.Brand href="/">
//             <img
//               src={data?.logo?.source}
//               className="d-inline-block align-top"
//               alt="main logo"
//               style={
//                 data?.logo?.height && data?.logo?.width
//                   ? { height: data?.logo?.height, width: data?.logo?.width }
//                   : styles.logoStyle
//               }
//             />
//           </Navbar.Brand>
//         )}
//         <Navbar.Toggle
//           aria-controls="responsive-navbar-nav"
//           onClick={() => setExpanded(!expanded)}
//         />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="me-auto" />
//           <Nav>
//             {data
//               && data.sections?.map((section, index) => (section?.type === 'link' ? (
//                 <ExternalNavLink
//                   key={section.title}
//                   href={section.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   onClick={() => setExpanded(false)}
//                   className="navbar__link"
//                   theme={theme}
//                 >
//                   {section.title}
//                 </ExternalNavLink>
//               ) : (
//                 <InternalNavLink
//                   key={section.title}
//                   onClick={() => setExpanded(false)}
//                   exact={index === 0}
//                   activeClassName="navbar__link--active"
//                   className="navbar__link"
//                   to={section.href}
//                   theme={theme}
//                 >
//                   {section.title}
//                 </InternalNavLink>
//               )))}
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// const NavBarWithRouter = withRouter(NavBar);
// export default NavBarWithRouter;
