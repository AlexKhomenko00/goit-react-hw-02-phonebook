import React from 'react';

const errorStyles = {
  color: 'red',
  fontSize: 24,
};

const Error = () => (
  <h1 style={{ ...errorStyles }}>Oops, someting went wrong:( Try again!</h1>
);

export default Error;
