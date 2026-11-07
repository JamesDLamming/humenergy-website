import React from 'react';
import Nav from '../components/Nav';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import ProgramFinderForm from '../components/ProgramFinderForm';

export default function ProgramFinder() {
  return (
    <>
      <SEO title="Hum Energy - Program finder" />
      <div className="page-container bg-bgMain flex flex-col  min-h-screen overflow-hidden ">
        <Nav></Nav>
        <ProgramFinderForm />
        <Footer />
      </div>
    </>
  );
}
