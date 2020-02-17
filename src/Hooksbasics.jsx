import React, { useState } from 'react';


const HooksCounter = ({ title }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  const decrement = () => setCount(count - 1);

  return (
    <div className="counter">
      <h3>{title}</h3>
      <button type="button" onClick={increment}>
        +
      </button>
      <p>{count}</p>
      <button type="button" onClick={decrement}>
        -
      </button>
    </div>
  );
};

const HooksName = () => {
  const [name, setName] = useState('none');
  const [email, setEmail] = useState('enter email');

  const changer = (n) => setName(n);
  const changeEmail = (em) => setEmail(em);

  return (
    <>
      <button type="button" onClick={() => changer('Hello')}>
        click
      </button>
      <p>{name}</p>
      <button
        type="button"
        onClick={() => changeEmail('heena@gmail.com')}
      >
        click to set email
      </button>
      <p>{email}</p>
    </>
  );
};

const HooksToggle = () => {
  const [toggle, setToggle] = useState(false);

  const changeToggle = () => setToggle(!toggle);

  return (
    <>
      <button type="button" onClick={() => changeToggle()}>
        toggle
      </button>
      <p>{toggle}</p>
      {toggle ? <p>Click toggle Button</p> : <p>UnClick toggle Button</p>}
    </>
  );
};


export const useInputValue = (val) => {
  const [value, setValue] = useState(val);

  return {
    value,
    onChange: (e) => setValue(e.target.value),
  };
};

const HooksForm = () => {
  const user = useInputValue('');
  const email = useInputValue('');
  return (
    <>
      <form>
        <input
          name="user"
          type="text"
          {...user}
          placeholder="Enter Your Username"
        />
        <input
          name="email"
          type="email"
          {...email}
          placeholder="Enter Your passowrd"
        />
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Submit
        </button>
        <p>{user.value + email.value}</p>
      </form>
    </>
  );
};

const Hooksbasic = () => (
  <>
    <HooksCounter />
    <HooksName />
    <HooksToggle />
    <HooksForm />
  </>
);
export default Hooksbasic;
