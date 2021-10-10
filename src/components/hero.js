import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from 'react-bootstrap';
import { gsap, Power3 } from 'gsap';

import '../styles/main.scss';
import * as heroStyles from './hero.module.scss';

const Hero = ({ manifest }) => {
  const bkgRef = useRef();
  useEffect(() => {
    const bkg = bkgRef.current;
    gsap.set([bkg], { autoAlpha: 0 });
    gsap.to(bkg, {
      duration: 0.6,
      ease: Power3.easeOut,
      autoAlpha: 1,
      delay: 0.5,
    });
  });
  return (
    <section>
      <Container fluid className={heroStyles.hero} ref={bkgRef}>
        <Container className={heroStyles.innerContainer}>
          <Row className={heroStyles.lead}>
            <h1>{manifest}</h1>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

Hero.propTypes = {
  manifest: PropTypes.string.isRequired,
};

export default Hero;
