import React from 'react';

const apiServiceContext = React.createContext();

const { Provider, Consumer } = apiServiceContext;

export default apiServiceContext;

export {
  Provider as ApiServiceProvider,
  Consumer as ApiServiceConsumer,
};
