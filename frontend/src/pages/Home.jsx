import React from 'react';
import Hero from '../components/Hero';
import ProblemSolution from '../components/ProblemSolution';
import Pillars from '../components/Pillars';
import Pipeline from '../components/Pipeline';
import UseCases from '../components/UseCases';

const Home = () => {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <Pillars />
      <Pipeline />
      <UseCases />
    </>
  );
};

export default Home;
