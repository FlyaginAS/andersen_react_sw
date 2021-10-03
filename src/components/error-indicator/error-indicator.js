import React from 'react';
import './error-indicator.css';

const ErrorIndicator = ({ error }) => {
  console.log(error);
  return <div>Error ! Please see console to details</div>;
};

export default ErrorIndicator;
