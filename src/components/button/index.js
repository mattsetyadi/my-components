import React from 'react';
import './styles.css';

const Button = () => {
  return (
    <>
      <div className='btn'>normal</div>
      <div className='btn btn-list'>normal list</div>
      <button
        className='btn btn-danger btn-disabled'
        onClick={() => console.log('cllicked')}
      >
        Button danger
      </button>
      <div className='btn btn-info' onClick={() => console.log('cllicked')}>
        Button Info
      </div>
      <div className='btn btn-info btn-padding-m'>Button padding M</div>
      <p className='btn btn-danger btn-padding-l'>Button padding L</p>
    </>
  );
};

export default Button;
