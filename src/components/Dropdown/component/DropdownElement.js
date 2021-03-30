import React, { useState, useRef, useEffect } from 'react';

const DropdownElement = ({ options, prompt, value, onChange, id, label }) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const ref = useRef(null);

  useEffect(() => {
    // Special case if we cannot touch on mobile phone
    ['click', 'touchend'].forEach((e) => {
      document.addEventListener('click', toggle);
    });
    // normal use if mobile touch worked
    // document.addEventListener('click', toggle);
    return () => {
      // Special case too on component unmount
      ['click', 'touchend'].forEach((e) => {
        document.removeEventListener('click', toggle);
      });
      //   normal use if mobile touch worked
      //   document.removeEventListener('click', toggle);
    };
  }, []);

  const toggle = (e) => {
    // console.dir(e.target, e.current);
    // console.dir('e target >>', e.target);
    // console.dir('e current >>', e.current);
    // for onBlur
    setOpen(e && e.target === ref.current);
  };

  const selectOption = (option) => {
    setQuery('');
    onChange(option);
    setOpen(false);
  };

  const filter = (options) => {
    return options.filter(
      (option) => option[label].toLowerCase().indexOf(query.toLowerCase()) > -1,
    );
  };

  const displayValue = () => {
    if (query.length > 0) return query;
    if (value) return value[label];
    return '';
  };

  return (
    <div className='dropdown'>
      <div className='control'>
        <div className='selected-value'>
          <input
            type='text'
            ref={ref}
            placeholder={value ? value[label] : prompt}
            value={displayValue()}
            onChange={(e) => {
              setQuery(e.target.value);
              // dropdown is already have a value
              // so we have to unselect the value and start filter the value
              onChange(null);
            }}
            onClick={toggle}
            onTouchEnd={toggle}
          />
        </div>
        <div className={`arrow ${open ? 'open' : null}`} />
      </div>
      <div className={`options ${open ? 'open' : null}`}>
        {filter(options).map((option) => (
          <div
            key={option[id]}
            className={`option ${value === option ? 'selected' : null}`}
            onClick={() => selectOption(option)}
          >
            {option[label]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownElement;
