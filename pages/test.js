import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import SEO from '../components/SEO';
import DefaultButton from '../components/DefaultButton';
import StateSelector from '../components/StateSelector';
import VPPFinderOutput from '../components/VPPFinderOutput';
import UtilitySelector from '../components/UtililtySelector';
import MultiSelector from '../components/MultiSelector';
import SingleSelector from '../components/SingleSelectorOld';
import SingleSelectorTest from '../components/SingleSelector';
require('dotenv').config();

export default function test() {
  const states = [
    { value: 'AL', label: 'AL' },
    { value: 'AK', label: 'AK' },
    { value: 'AR', label: 'AR' },
    { value: 'AZ', label: 'AZ' },
    { value: 'CA', label: 'CA' },
    { value: 'CO', label: 'CO' },
    { value: 'CT', label: 'CT' },
    { value: 'DE', label: 'DE' },
    { value: 'FL', label: 'FL' },
    { value: 'GA', label: 'GA' },
    { value: 'HI', label: 'HI' },
    { value: 'IA', label: 'IA' },
    { value: 'ID', label: 'ID' },
    { value: 'IL', label: 'IL' },
    { value: 'IN', label: 'IN' },
    { value: 'KS', label: 'KS' },
    { value: 'KY', label: 'KY' },
    { value: 'LA', label: 'LA' },
    { value: 'MA', label: 'MA' },
    { value: 'MD', label: 'MD' },
    { value: 'ME', label: 'ME' },
    { value: 'MI', label: 'MI' },
    { value: 'MN', label: 'MN' },
    { value: 'MO', label: 'MO' },
    { value: 'MS', label: 'MS' },
    { value: 'MT', label: 'MT' },
    { value: 'NC', label: 'NC' },
    { value: 'ND', label: 'ND' },
    { value: 'NE', label: 'NE' },
    { value: 'NH', label: 'NH' },
    { value: 'NJ', label: 'NJ' },
    { value: 'NM', label: 'NM' },
    { value: 'NV', label: 'NV' },
    { value: 'NY', label: 'NY' },
    { value: 'OH', label: 'OH' },
    { value: 'OK', label: 'OK' },
    { value: 'OR', label: 'OR' },
    { value: 'PA', label: 'PA' },
    { value: 'RI', label: 'RI' },
    { value: 'SC', label: 'SC' },
    { value: 'SD', label: 'SD' },
    { value: 'TN', label: 'TN' },
    { value: 'TX', label: 'TX' },
    { value: 'UT', label: 'UT' },
    { value: 'VA', label: 'VA' },
    { value: 'VT', label: 'VT' },
    { value: 'WA', label: 'WA' },
    { value: 'WI', label: 'WI' },
    { value: 'WV', label: 'WV' },
    { value: 'WY', label: 'WY' },
  ];
  const [stateRegion, setStateRegion] = useState('');
  const [Utility, setUtility] = useState('');
  const handleStateSelectionChange = (option) => {
    setStateRegion(option);
    const newState = option;
    setStateRegion(newState);
    console.log(stateRegion);
  };

  const handleUtilitySelectionChange = (option) => {
    setUtility(option);
    const newUtility = option;
    setUtility(newUtility);
    console.log(Utility);
  };

  function clearUtility() {
    setUtility(null);
  }
  return (
    <div className="w-full">
      <SingleSelectorTest
        optionsList={states}
        selectedOption={stateRegion}
        onOptionSelected={(handleStateSelectionChange, clearUtility)}
      ></SingleSelectorTest>
      <button onClick={clearUtility}>Clear Selection in Select A</button>

      <SingleSelectorTest
        optionsList={states}
        selectedOption={Utility}
        onOptionSelected={handleUtilitySelectionChange}
      ></SingleSelectorTest>
    </div>
  );
}