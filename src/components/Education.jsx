import React, { useEffect, useState, useContext } from 'react';
import { Chrono } from 'react-chrono';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Fade from 'react-reveal';
import { ThemeContext } from 'styled-components';
import endpoints from '../constants/endpoints';
import Header from './Header';
import FallbackSpinner from './FallbackSpinner';
import '../css/education.css';

function Education(props) {
  const theme = useContext(ThemeContext);
  const { header } = props;
  const [data, setData] = useState(null);
  const [width, setWidth] = useState('50vw');
  const [mode, setMode] = useState('VERTICAL_ALTERNATING');
  // const [mode, setMode] = useState('HORIZONTAL');

  useEffect(() => {
    fetch(endpoints.education, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);

    if (window?.innerWidth < 576) {
      setMode('HORIZONTAL');
      // setMode('VERTICAL_ALTERNATING');
    }

    if (window?.innerWidth < 576) {
      setWidth('100vw');
    } else if (window?.innerWidth >= 576 && window?.innerWidth < 768) {
      setWidth('90vw');
    } else if (window?.innerWidth >= 768 && window?.innerWidth < 1024) {
      setWidth('75vw');
    } else {
      setWidth('90vw');
    }
  }, []);

  return (
    <>
      <Header title={header} />
      {data ? (
        <Fade>
          <div style={{
            width,
          }}
          >
            <Container>
              <Chrono
                slideShow
                hideControls
                allowDynamicUpdate
                useReadMore={false}
                classNames={{
                  // cardText: 'card-text',
                  cardTitle: 'card-title',
                  cardSubTitle: 'card-subtitle',
                  cardText: 'card-detailedtext',
                }}
                items={data.education}
                cardHeight={window.innerWidth > 576 ? 225 : 200}
                mediaHeight={window.innerWidth > 576 ? 300 : 200}
                mode={mode}
                fontSizes={{
                  cardTitle: window.innerWidth > 576 ? '1.5rem' : '0.9rem',
                  cardText: window.innerWidth > 576 ? '1rem' : '0.7rem',
                }}
                theme={{
                  primary: theme.accentColor,
                  secondary: '#312d2d',
                  cardForeColor: theme.chronoTheme.cardForeColor,
                  cardBgColor: '#232323',
                  titleColor: theme.chronoTheme.titleColor,
                  titleColorActive: '#fff',
                  titleColorInactive: '#aaa',
                  titleFontSize: '1rem',
                }}
              />
              {/* <Chrono
                slideShow
                hideControls
                allowDynamicUpdate
                useReadMore={false}
                items={data.education}
                cardHeight={window.innerWidth > 576 ? 225 : 200} // Adjust height for mobile
                mediaHeight={window.innerWidth > 576 ? 300 : 200}
                // cardHeight={450 * 0.5}
                // mediaHeight={window.innerWidth > 576 ? (400 * 0.75) : (250 * 0.75)}
                mode={mode}
                // textOverlay
                fontSizes={{
                  // cardTitle: '1.5vm',
                  cardTitle: window.innerWidth > 576 ? '1.5rem' : '0.8rem',
                  cardText: window.innerWidth > 576 ? '1rem' : '0.9rem',
                }}
                theme={{
                  primary: theme.accentColor,
                  secondary: '#312d2d',
                  cardForeColor: theme.chronoTheme.cardForeColor,
                  cardBgColor: '#232323',
                  titleColor: theme.chronoTheme.titleColor,
                }}
              >
                <div className="chrono-icons">
                  {data.education.map((education) => (education.icon ? (
                    <img
                      key={education.icon.src}
                      src={education.icon.src}
                      alt={education.icon.alt}
                    />
                  ) : null))}
                </div>
              </Chrono> */}
            </Container>
          </div>
        </Fade>
      ) : <FallbackSpinner />}
    </>
  );
}

Education.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Education;
