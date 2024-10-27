import React from 'react';
import AppRoutes from './routes';
// import ProxyForLogin from "./pages/ProxyForLogin";
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
