import React, { useState, useRef, useEffect } from 'react';

const DropdownElement = ({ options, prompt, value, onChange, id, label }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    document.addEventListener('click', close);
    return () => {
      document.removeEventListener('click', close);
    };
  }, []);

  function close(e) {
    // console.dir(e.target, e.current);
    // console.dir('e target >>', e.target);
    // console.dir('e current >>', e.current);
    // for onBlur
    setOpen(e && e.target === ref.current);
  }

  return (
    <div className='dropdown'>
      <div className='control' onClick={() => setOpen((prev) => !prev)}>
        <div className='selected-value' ref={ref}>
          {value ? value[label] : prompt}
        </div>
        <div className={`arrow ${open ? 'open' : null}`} />
      </div>
      <div className={`options ${open ? 'open' : null}`}>
        {options.map((option) => (
          <div
            key={option[id]}
            className={`option ${value === option ? 'selected' : null}`}
            onClick={() => {
              onChange(option);
              setOpen(false);
            }}
          >
            {option[label]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownElement;
