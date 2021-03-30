import React, { useState } from 'react';
import countries from './data/countries.json';
import animals from './data/animals.json';
import './component/styles.css';

import DropdownElement from './component/DropdownElement';

const Dropdown = () => {
  const [valueCountry, setValueCountry] = useState(null);
  const [valueAnimal, setValueAnimal] = useState(null);

  return (
    <div className='wrapper'>
      <div style={{ width: 200, marginRight: 20 }}>
        <DropdownElement
          options={countries}
          prompt='Select Country....'
          value={valueCountry}
          id='code'
          label='name'
          onChange={(val) => setValueCountry(val)}
        />
      </div>
      <div style={{ width: 200 }}>
        <DropdownElement
          options={animals}
          prompt='Select Animals....'
          value={valueAnimal}
          id='id'
          label='name'
          onChange={(val) => setValueAnimal(val)}
        />
      </div>
    </div>
  );
};

export default Dropdown;
