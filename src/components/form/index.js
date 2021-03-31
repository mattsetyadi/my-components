import React from 'react';

import { useForm } from './hooks';
import FormComponent from './FormComponent';

const Form = () => {
  const { onChange, onSubmit, values } = useForm(() => console.log(values), {
    username: '',
    email: '',
    password: '',
  });

  //   const onSubmitCallback = () => {
  //     console.log(values);
  //   };
  //   const [values, setValues] = useState({
  //     username: '',
  //     email: '',
  //   });

  //   const handleChange = (e) => {
  //     setValues({ ...values, [e.target.name]: e.target.value });
  //   };

  //   const onSubmit = (e) => {
  //     e.preventDefault();
  //     console.log(values);
  //   };

  return (
    <form onClick={onSubmit}>
      <FormComponent
        type='text'
        placeholder='insert your name'
        name='username'
        onChange={onChange}
        // onChange={(e) => handleChange(e)}
        value={values.username}
      />
      <FormComponent
        type='text'
        placeholder='insert your email'
        name='email'
        onChange={onChange}
        // onChange={handleChange}
        value={values.email}
      />
      <FormComponent
        type='password'
        placeholder='insert your password'
        name='password'
        onChange={onChange}
        // onChange={handleChange}
        value={values.password}
      />

      {/* <input
        type='text'
        name='username'
        value={values.username}
        onChange={handleChange}
        placeholder='insert your usernmae'
      />
      <input
        type='text'
        name='email'
        value={values.email}
        onChange={handleChange}
        placeholder='Insert your email...'
      /> */}
      <button type='submit'>submit</button>
    </form>
  );
};

export default Form;
