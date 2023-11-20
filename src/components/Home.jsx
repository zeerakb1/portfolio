import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import Fade from 'react-reveal';
import { Button } from 'react-bootstrap';
import endpoints from '../constants/endpoints';
import Social from './Social';
import FallbackSpinner from './FallbackSpinner';
import '../css/home.css';

const styles = {
  buttonStyle: {
    display: 'inline-block',
    margin: '15px',
    outline: '0',
    border: '0',
    cursor: 'pointer',
    backgroundColor: '#28486a',
    borderRadius: '4px',
    padding: '8px 16px',
    fontSize: '16px',
    borderBottom: '4px solid #1a2e44',
    fontWeight: '700',
    color: 'white',
    lineHeight: '26px',
  },
  nameStyle: {
    fontSize: '5em',
  },
  inlineChild: {
    display: 'inline-block',
  },
  mainContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  showMoreStyle: {
    margin: '25px',
    fontWeight: 'bold',
    // background: '#252d76',
    padding: '12px 48px',
    borderRadius: '25px',
  },
};

function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.home, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return data ? (
    <Fade>
      <div style={styles.mainContainer}>
        <h1 className="jt --debug">
          <span className="jt__row">
            <span className="jt__text">Zeerak Babar</span>
          </span>
          <span className="jt__row jt__row--sibling" aria-hidden="true">
            <span className="jt__text">Zeerak Babar</span>
          </span>
          <span className="jt__row jt__row--sibling" aria-hidden="true">
            <span className="jt__text">Zeerak Babar</span>
          </span>
          <span className="jt__row jt__row--sibling" aria-hidden="true">
            <span className="jt__text">Zeerak Babar</span>
          </span>
        </h1>
        {/* <h1 style={styles.nameStyle}>{data?.name}</h1> */}
        <div style={{ flexDirection: 'row' }}>
          <h2 style={styles.inlineChild}>I&apos;m&nbsp;</h2>
          <Typewriter
            textStyle={{
              // fontFamily: 'Red Hat Display',
              // color: '#3F3D56',
              fontWeight: 500,
              fontSize: '1.5em',
            }}
            options={{
              loop: true,
              autoStart: true,
              strings: data?.roles,
            }}
          />
        </div>
        <Social />
        <Button
          style={styles.showMoreStyle}
          href="https://drive.google.com/file/d/1L_DQrEttChd8E7dD-Z82oRc4pTDa7AKx/view?usp=sharing"
          variant="outline-primary"
        >
          View Resume
        </Button>
        {/* <button type="button" id="button-style" onClick={handleClick}>  Resume </button> */}
      </div>
    </Fade>
  ) : <FallbackSpinner />;
}

export default Home;
