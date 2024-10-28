import React from 'react';
import AppRoutes from './routes';
import GlobalStyle from './styles/GlobalStyle';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <AppRoutes />
    </div>
  );
};

export default App;
