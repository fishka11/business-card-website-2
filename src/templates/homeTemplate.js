import React from 'react';
import Hero from '../components/hero';
import StrongPoints from '../components/strongPoints';
import Layout from './layout';

const HomeTemplate = () => (
  <Layout>
    <Hero manifest="To jest najlepsza firma remontowa w Sosnowcu" />
    <StrongPoints />
  </Layout>
);

export default HomeTemplate;
