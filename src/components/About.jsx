import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Container, Col, Row } from 'react-bootstrap';
import { Tilt } from 'react-tilt';
import PropTypes from 'prop-types';
import Fade from 'react-reveal';
import Header from './Header';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';

const styles = {
  sectionContainer: {
    padding: '60px 0',
  },
  cardBorder: {
    borderRadius: '50%',
    border: '2px solid blue',
  },
  cardContainer: {
    // backgroundColor: 'rgba(29, 29, 29, 0.874)',
    value: '0',
    borderRadius: '30px',
    padding: '30px',
    // boxShadow: '0 0 10px rgba(91, 91, 91, 0.874)',
  },
  introText: {
    // fontSize: '1.2em',
    fonnSize: '5%',
    fontWeight: 400,
    textAlign: 'left',
  },
  headerText: {
    margin: '2px',
    fontSize: '2.4em',
    fontWeight: 500,
    textAlign: 'left',
    color: '#afaeae',
    textShadow: '4px 4px 4px rgba(97, 97, 97, 0.874)',
  },
  titleText: {
    fonnSize: '20%',
    fontWeight: 250,
    textAlign: 'left',
    color: '#3D84C6',

  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '16px 14px 20px #0000008c;',
    // margin: '10px',
  },
  circularImage: {
    width: '250px',
    height: '250px',
    marginBottom: '12%',
    borderRadius: '50%',
    objectFit: 'cover',
    position: 'relative',
    overflow: 'hidden',
    border: '8px solid #1a2e44',
  },
};

function About(props) {
  const { header } = props;
  const [data, setData] = useState(null);

  const parseIntro = (text) => (
    <ReactMarkdown children={text} />
  );
  const defaultOptions = {
    reverse: false,
    max: 10,
    perspective: 500,
    scale: 1.2,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: 'cubic-bezier(.03,.98,.52,.99)',
  };

  useEffect(() => {
    fetch(endpoints.about, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return (
    <div id="about">
      <Header title={header} />
      <div style={styles.sectionContainer}>
        <Container>
          {data ? (
            <Fade>
              <div style={styles.cardContainer}>
                <Row>
                  <Col md={4} style={styles.imageContainer}>
                    <Tilt options={defaultOptions}>
                      <img
                        src={data?.imageSource}
                        alt="profile"
                        style={styles.circularImage}
                        className="circularImage"
                      />
                    </Tilt>
                  </Col>
                  <Col md={8}>
                    <h2 style={styles.headerText}>{data.name}</h2>
                    <h4 style={styles.titleText}>{data.title}</h4>
                    <div style={styles.introText}>{parseIntro(data.about)}</div>
                  </Col>
                </Row>
              </div>
            </Fade>
          ) : (
            <FallbackSpinner />
          )}
        </Container>
      </div>
    </div>
  );
}

About.propTypes = {
  header: PropTypes.string.isRequired,
};

export default About;

// import React, { useState, useEffect } from 'react';
// import ReactMarkdown from 'react-markdown';
// import { Container, Col, Row } from 'react-bootstrap';
// import PropTypes from 'prop-types';
// import Fade from 'react-reveal';
// import Header from './Header';
// import endpoints from '../constants/endpoints';
// import FallbackSpinner from './FallbackSpinner';

// const styles = {
//   introTextContainer: {
//     margin: 10,
//     flexDirection: 'column',
//     whiteSpace: 'pre-wrap',
//     textAlign: 'left',
//     fontSize: '1.2em',
//     fontWeight: 400,
//   },
//   introImageContainer: {
//     margin: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     display: 'flex',
//   },
// };

// function About(props) {
//   const { header } = props;
//   const [data, setData] = useState(null);

//   const parseIntro = (text) => (
//     <ReactMarkdown
//       children={text}
//     />
//   );

//   useEffect(() => {
//     fetch(endpoints.about, {
//       method: 'GET',
//     })
//       .then((res) => res.json())
//       .then((res) => setData(res))
//       .catch((err) => err);
//   }, []);

//   return (
//     <>
//       <Header title={header} />
//       <div className="section-content-container">
//         <Container>
//           {data
//             ? (
//               <Fade>
//                 <Row>
//                   <Col style={styles.introTextContainer}>
//                     {parseIntro(data.about)}
//                   </Col>
//                   <Col style={styles.introImageContainer}>
//                     <img src={data?.imageSource} alt="profile" width="50%" height="auto" />
//                   </Col>
//                 </Row>
//               </Fade>
//             )
//             : <FallbackSpinner />}
//         </Container>
//       </div>
//     </>
//   );
// }

// About.propTypes = {
//   header: PropTypes.string.isRequired,
// };

// export default About;
