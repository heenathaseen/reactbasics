import React, { useState, useEffect } from 'react';

const Hooksfetch = () => {
  const [person, setPerson] = useState();

  useEffect(() => {
    fetch('https://api.randomuser.me/')
      .then((response) => response.json())
      .then((data) => setPerson(data.results[0]));
  }, []);
  return (
    <>
      {person ? (
        <>
          <p>{person.name.title}</p>
          <p>{person.name.first}</p>
          <p>{person.name.last}</p>
          <p>{person.email}</p>
          <img src={person.picture.large} alt="" />
        </>
      ) : (
        <p>
          No data in the state, Click above button to fetch data from the API
        </p>
      )}
    </>
  );
};

export default Hooksfetch;
