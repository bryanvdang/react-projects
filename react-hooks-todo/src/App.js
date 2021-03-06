import React, { useContext } from 'react';

import Ingredients from './components/Ingredients/Ingredients';
import Auth from './components/Auth'
import { AuthContext } from './context/auth-context'; //wrap in curly braces if its an named export

const App = props => {
  const authContext = useContext(AuthContext);

  let content = <Auth />
  if (authContext.isAuth) {
    content = <Ingredients />; 
  }
  return content

  // return <Ingredients />;
};

export default App;
