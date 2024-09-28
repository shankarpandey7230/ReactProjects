import React from 'react';
import Navbar from './Navbar';
import CartContainer from './CartContainer';
import { useGlobalContext } from './context';

const App = () => {
  const { loading } = useGlobalContext();
  if (loading) {
    return (
      <main>
        <div
          className="loading"
          style={{ margin: 'auto', marginTop: '7rem' }}
        ></div>
      </main>
    );
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
};

export default App;
