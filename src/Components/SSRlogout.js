import React from 'react';
import { useHistory } from 'react-router-dom';

const SSRLogout = ({ setAuthenticated }) => {
  const history = useHistory();

  const handleLogout = (e) => {
    e.preventDefault();
    setAuthenticated(false);
    history.push('/SSRlogin');
  };

  return (
    <div>
      <form onSubmit={handleLogout}>
        <button type='submit'>Logout</button>
      </form>
    </div>
  );
};

export default SSRLogout;
